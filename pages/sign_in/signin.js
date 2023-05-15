import styles from './signin.module.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';

import { useAuth } from '../../hooks/useAuth';

const SignIn = () => {
  const isAuthenticated = useIsAuthenticated();
  const { accounts, instance } = useMsal();

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated]);

  const login = async () => {
    await instance.loginRedirect({
      prompt: 'select_account',
      scopes: ['User.Read'],
    });
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.logo} src="/sti.png" />
        <h2 className={styles.header}>Schedule Generator</h2>
        <h3>Sign In Now</h3>

        <button onClick={login} className={styles.signin_button}>
          <img className={styles.microsoft} src="/microsoft.png" />
          Microsoft Account
        </button>
        <p className={styles.p}>
          Having trouble logging in? <span className={styles.span}>Click Here</span>
        </p>
      </div>
    </>
  );
};

export default SignIn;
