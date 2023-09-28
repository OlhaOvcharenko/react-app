import styles from '../NavBar/NavBar.module.scss'
import { NavLink } from 'react-router-dom';
import '../../styles/global.scss';

const NavBar = () => {
  return(
    <section className={styles.nav}>
      <div className={styles.icon}>
          <a><span className="fa fa-tasks" /></a>
      </div>
      <div className={styles.list}>
          <ul>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
          </ul>
      </div>
    </section>
  );
};

export default NavBar;