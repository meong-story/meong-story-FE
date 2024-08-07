import { Navigate, Outlet } from 'react-router-dom';

import ROUTE_PATH from '../shared/constants/routePath';

const AuthProvider = () => {
  if (!localStorage.getItem('token')) return <Navigate to={ROUTE_PATH.INTRO} />;

  // 펫 등록 여부에 따라서 다르게 리디렉션 해줄 것

  return <Outlet />;
};

export default AuthProvider;