import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const CreateTweetWrapper = styled.div`
  padding: 18px 12px 12px 27px;

  ${mixinFlex({ alignItem: 'start', justifyContent: 'space-between' })};
`;

export const TweetForm = styled.form`
  margin-left: 28px;
  width: 100%;
`;

export const Textarea = styled.textarea`
  resize: none;
  border: 1px solid transparent;
  border-radius: 6px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.px18};
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
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.px16};
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
`;
