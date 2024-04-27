import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';
import { mediaSizes } from '@/constants/theme';

const { px800 } = mediaSizes;

export const CreateTweetWrapper = styled.div`
  padding: 18px 12px 12px 27px;

  ${mixinFlex({ alignItem: 'start', justifyContent: 'space-between' })};

  @media (max-width: ${px800}) {
    padding: 18px 5px 12px;
  }
`;

export const TweetForm = styled.form`
  margin-left: 28px;
  width: 100%;

  @media (max-width: ${px800}) {
    margin-left: 5px;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 6px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.px18};
  color: ${({ theme }) => theme.colors.text};
  transition: 0.2s ease-in;
  padding: 10px;
  height: 80px;

  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.px22};
    color: ${({ theme }) => theme.colors.grey};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const ControlButtonsWrapper = styled.div`
  ${mixinFlex({ alignItem: 'center', justifyContent: 'space-between' })}
`;

export const LimitNotificationMessage = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;

  @media (max-width: ${px800}) {
    font-size: ${({ theme }) => theme.fontSizes.px14};
  }
`;

export const UploadWrapper = styled.div`
  position: relative;
  transition: 0.2s ease-in;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'space-between' })}

  & label:hover {
    opacity: 0.7;
  }
`;

export const UploadImageInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const Image = styled.img`
  cursor: pointer;
`;

export const UploadImageLabel = styled.label``;

export const Notification = styled.span`
  position: relative;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.px16};
`;

export const ClearAttachedFileButton = styled.button`
  position: absolute;
  top: 3px;
  right: -16px;
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );

  &:hover {
    opacity: 0.7;
  }
`;

export const AddTweetButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 76px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white1};
  }

  @media (max-width: ${px800}) {
    padding: 10px 15px;
    font-size: ${({ theme }) => theme.fontSizes.px16};
  }
`;
