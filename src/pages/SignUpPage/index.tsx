import googleIconPath from '@/assets/icons/google-icon.svg';
import twitterIconPath from '@/assets/icons/twitter-icon.svg';
import { footerLinks } from '@/constants';
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
  TwitterBanner,
  TwitterIcon,
} from '@/pages/SignUpPage/styled';

export const SignUpPage = () => {
  const links = footerLinks.map((link) => <LinkItem key={link}>{link}</LinkItem>);

  return (
    <SignUpWrapper>
      <Content>
        <TwitterBanner />

        <SignUpBlock>
          <TwitterIcon src={twitterIconPath} />
          <Title>Happening now</Title>
          <Text>Join Twitter today</Text>
          <ButtonsWrapper>
            <SignUpButton>
              <GoogleIcon src={googleIconPath} />
              Sign up with Google
            </SignUpButton>
            <SignUpButton>Sign up with phone or email</SignUpButton>
          </ButtonsWrapper>
          <PrivacyText>
            By singing up you agree to the
            <PrivacyLink href='#'>Terms of Service</PrivacyLink> and{' '}
            <PrivacyLink href='#'>Privacy Policy</PrivacyLink>, including{' '}
            <PrivacyLink href='#'>Cookie Use</PrivacyLink> .
          </PrivacyText>
          <LogInText>Already have an account? Log in</LogInText>
        </SignUpBlock>
      </Content>

      <Footer>
        <FooterLinks>{links}</FooterLinks>
      </Footer>
    </SignUpWrapper>
  );
};
