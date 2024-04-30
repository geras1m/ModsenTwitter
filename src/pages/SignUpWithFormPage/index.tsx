import twitterLogoPath from '@/assets/icons/twitter-icon.svg';
import { SignUpForm } from '@/components/SignUpForm';
import {
  SignUpBlock,
  SignUpWithFormPageWrapper,
  Title,
  TwitterLogo,
} from '@/pages/SignUpWithFormPage/styled';

export const SignUpWithFormPage = () => (
  <SignUpWithFormPageWrapper>
    <SignUpBlock>
      <TwitterLogo src={twitterLogoPath} />
      <Title>Create an account</Title>

      <SignUpForm />
    </SignUpBlock>
  </SignUpWithFormPageWrapper>
);
