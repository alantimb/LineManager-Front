import { createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage('userData', {});

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const isReturningToLogin = event.currentTarget.location.pathname === '/sign-in';
      if (!isReturningToLogin) {
        setUserData({});
        window.localStorage.removeItem('userData');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
}