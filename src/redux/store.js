import { createStore } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';
import listsReducer from './listReducer';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';


//selectors
export const getFilteredCards = ({ cards, searchTerm }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchTerm));

export const getListById = ({lists}, listId) => lists.find((list) => list.id === listId);

export const getColumnsByList = ({columns}, listId) => columns.filter((column) => column.listId === listId);

export const getFavoriteCards = ({cards}) => cards.filter(card => card.isFavorite === true);

export const getAllLists = (state) => state.lists;


// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const addList = payload => ({type: 'ADD_LIST', payload});

export const updateSearching = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

export const addToFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload })


const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchTerm: searchStringReducer(state.searchTerm, action)
  };

  return newState; 
};


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;