import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import googleIconPath from '@/assets/icons/google-icon.svg';
import twitterIconPath from '@/assets/icons/twitter-icon.svg';
import { footerLinks, routes } from '@/constants';
import { auth, db, googleAuthProvider } from '@/firabase';
import {
  ButtonsWrapper,
  Content,
  Footer,
  FooterLinks,
  GoogleIcon,
  LinkItem,
  LogInText,
  PrivacyLink,
  PrivacyText,
  SignUpBlock,
  SignUpButton,
  SignUpWrapper,
  Text,
  Title,
  ToLoginPageLink,
  ToSignUpPageLink,
  TwitterBanner,
  TwitterIcon,
} from '@/pages/SignUpPage/styled';

export const SignUpPage = () => {
  const links = footerLinks.map((link) => <LinkItem key={link}>{link}</LinkItem>);

  const handleSignInWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleAuthProvider);

      await setDoc(doc(db, 'users', `${user.uid}`), {
        uis: user.uid,
        born: null,
        isGoogle: true,
        email: user.email ? user.email : null,
        name: user.displayName ? user.displayName : null,
        phone: user.phoneNumber ? user.phoneNumber : null,
      });

      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignUpWrapper>
      <Content>
        <TwitterBanner />

        <SignUpBlock>
          <TwitterIcon src={twitterIconPath} />
          <Title>Happening now</Title>
          <Text>Join Twitter today</Text>
          <ButtonsWrapper>
            <SignUpButton onClick={handleSignInWithGoogle}>
              <GoogleIcon src={googleIconPath} />
              Sign up with Google
            </SignUpButton>
            <SignUpButton>
              <ToSignUpPageLink to={routes.sign_up}>Sign up with phone or email</ToSignUpPageLink>
            </SignUpButton>
          </ButtonsWrapper>
          <PrivacyText>
            By singing up you agree to the
            <PrivacyLink href='#'>Terms of Service</PrivacyLink> and{' '}
            <PrivacyLink href='#'>Privacy Policy</PrivacyLink>, including{' '}
            <PrivacyLink href='#'>Cookie Use</PrivacyLink> .
          </PrivacyText>
          <LogInText>
            Already have an account? <ToLoginPageLink to={routes.login}>Log in</ToLoginPageLink>{' '}
          </LogInText>
        </SignUpBlock>
      </Content>

      <Footer>
        <FooterLinks>{links}</FooterLinks>
      </Footer>
    </SignUpWrapper>
  );
};
