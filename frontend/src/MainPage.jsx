import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setToken } from './slices/loginSlice';

function MainPage() {
  let authToken = useSelector((state) => state.login.authToken);
  if (!authToken) {
    authToken = localStorage.getItem('authToken');
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    } else {
      dispatch(setToken(authToken));
    }
  }, []);
  return (
    <div>
      Main page
    </div>
  );
}

export default MainPage;
