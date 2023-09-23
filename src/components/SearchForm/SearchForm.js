import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = props => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
      dispatch({ type: 'UPDATE_SEARCHSTRING', payload: inputValue }); // Pass inputValue directly as the payload
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