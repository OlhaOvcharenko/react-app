import styles from '../Favorite/Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
    return(
      <div>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>Lorem impus.</p>
      </div>
    );
};

export default Favorite;