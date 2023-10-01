import shortid from "shortid";
import strContains from '../utils/strContains';

// selectors
export const getFavoriteCards = ({cards}) => cards.filter(card => card.isFavorite === true);

export const getFilteredCards = ({ cards, searchTerm }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchTerm));

// actions
const createActionName = actionName => `app/card/${actionName}`;

const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const DELETE_CARD = createActionName('DELETE_CARD');

// action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const addToFavorite = payload => ({type: TOGGLE_CARD_FAVORITE, payload });
export const deleteCard = payload => ({type: DELETE_CARD, payload});

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
    return [...statePart, { ...action.payload, id: shortid() }];

    case TOGGLE_CARD_FAVORITE:
    return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    
    case DELETE_CARD:
    return statePart.filter((card) => card.id !== action.payload);;/*co tutaj się dzieje:  
    It creates a new array by filtering out cards where the card.id is not equal to the action.payload. 
    тобто генерується нова таблиця з карток, id яких не дорівнює натиснутій картці, тобто картка з id яке натиснуте буде усунена.
    In other words, it removes the card with the ID specified in the action.payload from the state, effectively deleting it.*/

    default:
    return statePart;
  }
}

export default cardsReducer;