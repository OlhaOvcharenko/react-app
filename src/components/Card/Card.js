import styles from './Card.module.scss'
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../redux/cardsRedux';
import clsx from 'clsx';
import { deleteCard } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();


    const handleToggleFavorite = (e) => {
        e.preventDefault();
        dispatch(addToFavorite(props.id));
    };

    const handleDeleteCard = (e) => {
        e.preventDefault();
        dispatch(deleteCard(props.id));
    }


    return (
        <li className={styles.card}>
            {props.title}
            <button>
                <span  onClick={handleToggleFavorite} className = {clsx ('fa', 'fa-star-o', styles.favorite, props.isFavorite && styles.isFavorite )}></span>
                <span  onClick={handleDeleteCard} className={'fa fa-trash'} />
            </button>
        </li>
    );
};

export default Card; 

