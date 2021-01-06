import cardService from '../server';

//initial state of empty array
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.data;
    default:
      return state;
  }
};

/*
Thanks to redux thunk
One can make asynchronous action creators, 
which first wait for some operation to finish, after which they then dispatch the real action. 
*/
export const initialLists = () => {
  return async (dispatch) => {
    const todo = await cardService.getAllCards(process.env.TODO_ID);
    const done = await cardService.getAllCards(process.env.DONE_ID);
    dispatch({
      type: 'INIT',
      data: [{ todoList: todo }, { doneList: done }],
    });
  };
};

export const changeList = (cardId, listId) => {
  return async (dispatch) => {
    await cardService.update(cardId, listId);
    //after updating list need to fetch list again
    initialLists();
  };
};

export default reducer;
