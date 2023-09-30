import { addList } from '../../redux/listsRedux';
import styles from '../ListForm/ListForm.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ListForm = props => {

 const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ listId: props.listId, title, description}));
    setTitle('');
    setDescription ('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <span className={styles.lable}>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <span className={styles.lable}>Description:</span> <TextInput value={description} onChange={e => setDescription(e.target.value)} />
      <Button>
         Add List 
      </Button>
    </form>
  );
}

export default ListForm;

