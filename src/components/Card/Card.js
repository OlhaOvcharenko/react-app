import styles from './Card.module.scss'
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../redux/store';
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
             className = {clsx(styles.span, props.isFavorite === true && styles.favorite)}>
                <span className={'fa fa-' + props.icon} />
            </button>
        </li>
    );
};

export default Card; 