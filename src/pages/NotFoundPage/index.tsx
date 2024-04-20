import { useNavigate } from 'react-router-dom';

import { routes } from '@/constants';
import { Message, NotFoundPageWrapper, ToHomeButton } from '@/pages/NotFoundPage/styled';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleMoveToHomePage = () => {
    navigate(routes.home);
  };

  return (
    <NotFoundPageWrapper>
      <Message>Page not found &#128577;</Message>
      <ToHomeButton
        type='button'
        onClick={handleMoveToHomePage}
      >
        Go back home page
      </ToHomeButton>
    </NotFoundPageWrapper>
  );
};
