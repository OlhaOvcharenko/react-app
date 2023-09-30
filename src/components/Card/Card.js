import styles from './Card.module.scss'
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = props => {

    const dispatch = useDispatch();


    const handleToggleFavorite = (e) => {
        e.preventDefault();
        dispatch(addToFavorite(props.id));
    };


    return (
        <li className={styles.card}>
            {props.title}
            <button  onClick={handleToggleFavorite} 
             className = {clsx({ [styles.favorite]: props.isFavorite === true,})}>
                <span className={'fa fa-star-o'} />
            </button>
        </li>
    );
};

export default Card; 