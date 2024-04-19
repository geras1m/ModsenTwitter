import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

import googleIconPath from '@/assets/icons/google-icon.svg';
import twitterIconPath from '@/assets/icons/twitter-icon.svg';
import { footerLinks, routes } from '@/constants';
import { useToast } from '@/context/toastContext';
import { useAppDispatch } from '@/hooks/reduxHooks';
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
} from '@/pages/WelcomePage/styled';
import { FirebaseService } from '@/service';
import { setUser } from '@/store/slices/userSlice';
import { ToastType } from '@/types';
import { getFirebaseErrorMessage } from '@/utils/getFirebaseErrorMessage';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const links = footerLinks.map((link) => <LinkItem key={link}>{link}</LinkItem>);

  const handleSignInWithGoogle = async () => {
    try {
      const user = await FirebaseService.SignUpWithGoogle();

      dispatch(
        setUser({
          id: user.uid,
          email: user.email,
          isGoogleAuth: true,
          name: user.displayName,
          surname: null,
          phone: user.phoneNumber,
          telegramLink: null,
          gender: null,
          born: null,
        }),
      );
      navigate(routes.profile);
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast?.open(getFirebaseErrorMessage(error), ToastType.error);
      } else {
        console.error(error);
      }
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
