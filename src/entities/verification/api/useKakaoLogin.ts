import { useMutation } from '@tanstack/react-query';

import userAPI from './userAPI';

const useKakaoLogin = () => {
  return useMutation({
    mutationFn: (code: string) => userAPI.kakaoLogin(code),
  });
};
export default useKakaoLogin;
