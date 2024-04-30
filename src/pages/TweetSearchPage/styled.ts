import styled from 'styled-components';

import { mediaSizes } from '@/constants/theme';

const { px1150 } = mediaSizes;

export const TweetSearchPageWrapper = styled.main`
  width: 60%;
  max-width: 910px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-top: none;

  @media (max-width: ${px1150}) {
    width: 100%;
    max-width: 100%;
  }
`;
