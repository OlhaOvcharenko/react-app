import styles from '../Favorite/Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getFavoriteCards } from '../../redux/store';


const Favorite = (props) => {

  const favoriteCards = useSelector((state) => getFavoriteCards(state, props.id));

  if (favoriteCards && favoriteCards.length > 0){
    return(
      <div>
        <PageTitle>Favorite</PageTitle>
        <article className = {styles.items}>
          <ul className={styles.cards}>
            {favoriteCards.map((card) => (
            <Card key={card.id} {...card} />
            ))}
          </ul>
        </article>
      </div>
    )
  } else {
    return ( 
      <div> 
        <PageTitle>Favorite</PageTitle>
        <p className={styles.emptylist}>No cards...</p>
      </div>
    )
  }

};

export default Favorite;