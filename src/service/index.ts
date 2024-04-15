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
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

import { auth, db, googleAuthProvider } from '@/firabase';

interface IChangeUserDataProps {
  id: string;
  email: string;
  name: string | undefined;
  surname: string | undefined;
  gender: string | undefined;
  telegramLink: string | undefined;
  currentPassword: string | undefined;
  newPassword: string | undefined;
}

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
  async SignUpWithForm(
    name: string,
    email: string,
    password: string,
    phone: string,
    yearBirth: number,
    monthBirth: number,
    dayBirth: number,
  ): Promise<FirebaseUser> {
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
    const userDataFromDB = await this.GetUserDataFromDB(id);

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

  async GetUserDataFromDB(id: string) {
    const docRef = doc(db, 'users', `${id}`);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? docSnap.data() : null;
  },
};
