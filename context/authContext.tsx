import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { AccountInfo } from '@azure/msal-browser';
import { ReactElement } from 'react';

import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext<{
  user: AccountInfo | null;
  logout: () => void;
}>({
  user: null,
  logout: () => Promise.resolve(),
});

const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<AccountInfo | null>(null);

  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();
  useEffect(() => {
    if (isAuthenticated) {
      const accounts = instance.getAllAccounts();
      setUser(accounts[0]);
    } else {
      setUser(null);
    }
  }, [isAuthenticated]);

  const logout = async () => {
    await instance.logout({
      account: user,
      onRedirectNavigate: () => {
        false;
      },
    });
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
