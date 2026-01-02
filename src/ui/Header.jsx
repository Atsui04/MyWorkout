import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = function () {
  const getLinkClass = ({ isActive }) =>
    `${styles.linkItem} ${isActive ? styles.active : ""}`;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/home" className={getLinkClass}>
          Logo
        </NavLink>

        <div className={styles.links}>
          <NavLink to="/" className={getLinkClass}>
            Schedule
          </NavLink>
          <NavLink to="/archive" className={getLinkClass}>
            Archive
          </NavLink>
          <NavLink to="/profile" className={getLinkClass}>
            Profile
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
