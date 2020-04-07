import Link from 'next/link';
import styles from "./Nav.module.scss";

const linkStyle = {
  marginRight: 15
};

const Nav = () => (
  <div>
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <img className="logo" alt="Logo" src="/logo.png" />
      </div>
    </nav>
  </div>
);

export default Nav;