import styles from './navbar.module.css';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [showNav, setShowNav] = useState(false);
  const [showProfNav, setShowProfNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(!showNav);
  };

  const showProfNavHandler = () => {
    setShowProfNav(!showProfNav);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.slide_nav} ${showNav && styles.show}`}>
        <div onClick={showNavHandler} className={styles.icon_containers}>
          <ion-icon
            onClick={showNavHandler}
            style={{
              color: '#0078d4',
            }}
            name="menu-sharp"
          ></ion-icon>
        </div>
        <div className={styles.nav}>
          <p className={styles.title}>Schedule Generator</p>
          <nav>
            <ul className={styles.nav_link}>
              <li>
                <img className={styles.navicon} src="/home.png" />
                <p>Home</p>
              </li>
              <li>
                <img className={styles.navicon} src="/calendar.png" />
                <p>Calendar</p>
              </li>
              <li>
                <img className={styles.navicon} src="/dashboard.png" />
                <p>Dashboard</p>
              </li>
              <li>
                <img className={styles.navicon} src="/settings.png" />
                <p>Settings</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.left_div}>
        <div onClick={showNavHandler} className={styles.icon_container}>
          <ion-icon
            onClick={showNavHandler}
            style={{
              color: 'white',
            }}
            name="menu-sharp"
          ></ion-icon>
        </div>
        <p className={styles.title}>Schedule Generator</p>
      </div>
      <div onClick={showProfNavHandler} className={styles.right_div}>
        <div className={`${styles.profile_nav} ${showProfNav && styles.show}`}>
          <div className={styles.profnav_holder}>
            <p>STI College Global City</p>
            <div className={styles.logout} onClick={logout}>
              Sign out
            </div>
          </div>
          <div className={styles.profnav_holders}>
            <img
              style={{ width: '100px', height: '100px', borderRadius: '100%' }}
              src="/icon.jpg"
            />
            <div>
              <p>{user?.name}</p>
              <p className={styles.account}>View account</p>
            </div>
          </div>
        </div>
        <div className={styles.personal_info}>
          <p>{user?.username}</p>
          <p>STI COLLEGE GLOBAL CITY</p>
        </div>
        <img className={styles.icon} src="/icon.jpg" />
      </div>
    </div>
  );
};

export default Navbar;
