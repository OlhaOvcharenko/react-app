import styles from '../NavBar/NavBar.module.scss'

const NavBar = () => {
    return(
      <section className={styles.nav}>
        <div className={styles.icon}>
            <a><span className="fa fa-tasks" /></a>
        </div>
        <div className={styles.list}>
            <ul>
                <li><a  href="/">Home</a></li>
                <li><a  href="/favorite">Favorite</a></li>
                <li><a  href="/about">About</a></li>
            </ul>
        </div>
      </section>
    );
};

export default NavBar;