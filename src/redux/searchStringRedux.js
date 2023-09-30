

// actions
const createActionName = actionName => `app/search/${actionName}`;

const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHING');

// action creators

export const updateSearching = payload => ({ type: UPDATE_SEARCHSTRING, payload });

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCHSTRING:
    return action.payload
    
    default:
    return statePart;
  }
}

export default searchStringReducer;