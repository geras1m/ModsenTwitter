import styled from 'styled-components';

export const SearchBarWrapper = styled.section`
  width: 26%;
  max-width: 373px;
  padding-top: 30px;
  margin: 0 15px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  top: 13px;
  left: 20px;
  position: absolute;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px 15px 64px;
  border-radius: 31px;
  border: 1px solid ${({ theme }) => theme.colors.white1};
  color: ${({ theme }) => theme.colors.black1};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  transition: 0.3s ease;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.colors.white2};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const SuggestionBlock = styled.div`
  padding: 43px 15px 15px;
  border-radius: 10px;
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.white2};
`;

export const NotFoundMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.px14};
`;
