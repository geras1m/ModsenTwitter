import { useAppSelector } from '@/hooks/reduxHooks';

export const useAuth = () => {
  const { id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!id,
    id,
  };
};
