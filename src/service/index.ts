import { Dispatch, SetStateAction } from 'react';
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  User as FirebaseUser,
} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { auth, db, googleAuthProvider, storage } from '@/firabase';
import { IChangeUserDataProps, ICreateNewTweetInDB, ISignUpWithFormProps } from '@/service/types';
import { ITweetData, IUserData } from '@/types';

export const FirebaseService = {
  async LogIn(email: string, password: string): Promise<FirebaseUser> {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;
    return user;
  },

  async LogOut() {
    await signOut(auth);
  },

  async SignUpWithGoogle(): Promise<FirebaseUser> {
    const { user } = await signInWithPopup(auth, googleAuthProvider);

    await setDoc(doc(db, 'users', `${user.uid}`), {
      uis: user.uid,
      born: null,
      isGoogleAuth: true,
      surname: null,
      gender: null,
      telegramLink: null,
      email: user.email ? user.email : null,
      name: user.displayName ? user.displayName : null,
      phone: user.phoneNumber ? user.phoneNumber : null,
    });

    return user;
  },

  async SignUpWithForm(data: ISignUpWithFormProps): Promise<FirebaseUser> {
    const { email, name, phone, password, monthBirth, dayBirth, yearBirth } = data;
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, 'users', `${user.uid}`), {
      uis: user.uid,
      born: new Date(yearBirth, monthBirth, dayBirth),
      isGoogleAuth: false,
      surname: null,
      gender: null,
      telegramLink: null,
      email,
      name,
      phone,
    });

    return user;
  },

  async ChangeUserData(props: IChangeUserDataProps) {
    const { id, name, gender, surname, email, telegramLink, newPassword, currentPassword } = props;

    const docRef = doc(db, 'users', `${id}`);
    const userDataFromDB = await this.GetDataItemFromDB(id, 'users');

    if (userDataFromDB) {
      await updateDoc(docRef, {
        name: name || userDataFromDB.name,
        surname: surname || userDataFromDB.surname,
        gender: gender || userDataFromDB.gender,
        telegramLink: telegramLink || userDataFromDB.telegramLink,
      });
    }

    const user = auth.currentUser;

    if (user && newPassword && currentPassword) {
      const credential = EmailAuthProvider.credential(email, currentPassword);

      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);

      await signOut(auth);

      await signInWithEmailAndPassword(auth, email, newPassword);
    }
  },

  async GetDataItemFromDB(id: string, databaseName: 'users' | 'tweets') {
    const docRef = doc(db, databaseName, `${id}`);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? docSnap.data() : null;
  },

  async CreateNewTweetInDB(data: ICreateNewTweetInDB) {
    const { id, authorId, authorName, authorTag, text, imgLink, date } = data;
    await setDoc(doc(db, 'tweets', `${id}`), {
      uis: id,
      authorId,
      authorName,
      authorTag,
      date,
      text,
      imgLink,
      likes: [],
    });
  },

  async UpdateUserDataInTweets(userId: number | string, newName: string, newTag: string) {
    const q = query(collection(db, 'tweets'), where('authorId', '==', userId));

    const tweetsSnapshot = await getDocs(q);

    tweetsSnapshot.forEach((tweetDoc) => {
      updateDoc(tweetDoc.ref, {
        authorTag: newTag,
        authorName: newName,
      });
    });
  },

  async AddImageToStorage(id: number | string, selectedImage: File): Promise<string> {
    const storageRef = ref(storage, `images/${id}`);
    await uploadBytes(storageRef, selectedImage);
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  },

  async RemoveTweet(tweetId: string) {
    await deleteDoc(doc(db, 'tweets', tweetId));
  },

  async ChangeTweetLike(userId: string, tweetId: string) {
    const tweetRef = doc(db, 'tweets', tweetId.toString());

    const docSnap = await getDoc(tweetRef);

    const likesList: string[] = docSnap.exists() ? docSnap.data().likes : null;

    const likes =
      likesList.indexOf(userId) !== -1
        ? likesList.filter((likedId) => likedId !== userId)
        : [...likesList, userId];

    await updateDoc(tweetRef, {
      likes,
    });
  },

  async SubscriptionOnTweetUpdateForSearchPage(
    id: string,
    setTweets: Dispatch<SetStateAction<ITweetData | null>>,
  ) {
    const tweetRef = doc(db, 'tweets', id);
    const unsubscribe = onSnapshot(tweetRef, (snapshot) => {
      setTweets(snapshot.data() as ITweetData);
    });
    return unsubscribe;
  },

  async SubscribeOnTweetsUpdate(
    id: string,
    page: string,
    setTweets: Dispatch<SetStateAction<ITweetData[]>>,
  ) {
    let queryTweets;
    if (page === 'home') queryTweets = query(collection(db, 'tweets'));
    else queryTweets = query(collection(db, 'tweets'), where('authorId', '==', id));

    const unsubscribe = onSnapshot(queryTweets, (querySnapshot) => {
      const tweetsFromDB: ITweetData[] = [];
      querySnapshot.docs.forEach((docItem) => {
        tweetsFromDB.push(docItem.data() as ITweetData);
      });
      setTweets(tweetsFromDB.reverse());
    });

    return unsubscribe;
  },

  async GetQuerySnapshotFromDB(path: 'users' | 'tweets') {
    return getDocs(collection(db, path));
  },

  async GetUserDataCollectionFromDB() {
    const querySnapshot = await this.GetQuerySnapshotFromDB('users');

    const tweetsDataFromDB: IUserData[] = [];
    querySnapshot.forEach((userDoc) => {
      tweetsDataFromDB.push(userDoc.data() as IUserData);
    });
    return tweetsDataFromDB;
  },

  async GetTweetDataCollectionFromDB() {
    const querySnapshot = await this.GetQuerySnapshotFromDB('tweets');

    const tweetsDataFromDB: ITweetData[] = [];
    querySnapshot.forEach((tweetDoc) => {
      tweetsDataFromDB.push(tweetDoc.data() as ITweetData);
    });
    return tweetsDataFromDB;
  },
};
