import fetch from 'unfetch';

const token = process.env.TOKEN;
const apiKey = process.env.API_KEY;

const getAllCards = async (listId) => {
  //get all cards for a given list id
  //GET /1/lists/{listId}/cards
  console.log('hello from getAllCards', token);
  const res = await fetch(
    `https://api.trello.com/1/lists/${listId}/cards/?key=${apiKey}&token=${token}`
  );
  return res.json();
};

const update = async (cardId, listId) => {
  // PUT /1/cards/{cardID}?idList={listID}
  //listId is the list you want to move it to.
  fetch(
    `https://api.trello.com/1/cards/${cardId}/?idList=${listId}&key=${apiKey}&token=${token}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export default {
  getAllCards,
  update,
};
