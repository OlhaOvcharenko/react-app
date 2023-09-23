import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearching } from '../../redux/store';

const SearchForm = props => {

    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
      dispatch(updateSearching(inputValue));
      setInputValue('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput onChange={e => setInputValue(e.target.value)}  placeholder="Search..." />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;