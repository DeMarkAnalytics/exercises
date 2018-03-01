import uuid from 'uuid';

/*************
 * Selectors *
 *************/

export const getOrders = state => {
  return state.orders;
};

/********************
 * Actions creators *
 ********************/

export const createOrder = order => ({
  type: 'CREATE_ORDER',
  payload: order
});

export const submitOrder = orderId => ({
  type: 'SUBMIT_ORDER',
  payload: orderId
});

export const removeIngredient = ({orderId, ingredientId}) => ({
  type: 'REMOVE_INGREDIENT',
  payload: {orderId, ingredientId}
});

/*****************
 * Initial state *
 *****************/

const initialState = {
  '849d9334-d1c2-4847-a027-3a8cbd6ed990': {
    id: '849d9334-d1c2-4847-a027-3a8cbd6ed990',
    orderedAt: null,
    recipientName: 'Eric',
    ingredients: [
      {id: '5990e4bf-1330-46f1-9766-81f033c3c826', name: 'Pepperoni'},
      {id: 'fd7c4583-129c-469b-909d-8e68a45a9e31', name: 'Sausage'},
      {id: '3c4ae078-6887-4da5-8e79-98211d7cf0fe', name: 'Pineapple'},
      {id: 'f8f9355b-791d-4940-8c68-d7a8e7b2efab', name: 'Anchovies'}
    ],
    quantity: 1
  },
  '793cfceb-7f12-486e-8666-4eed1cbc6b41': {
    id: '793cfceb-7f12-486e-8666-4eed1cbc6b41',
    orderedAt: null,
    recipientName: 'Joe',
    ingredients: [
      {id: 'd1d2a6a4-f9ad-430d-8904-3a968bf29a66', name: 'Spinach'},
      {id: '5990e4bf-1330-46f1-9766-81f033c3c826', name: 'Pepperoni'},
      {id: '93bf551e-5f74-4055-a146-039f8915f16b', name: 'Bacon'},
      {id: 'f8f9355b-791d-4940-8c68-d7a8e7b2efab', name: 'Anchovies'}
    ],
    quantity: 3
  }
};

/***********
 * Reducer *
 ***********/

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_ORDER': {
      const id = uuid.v4();
      const newState = {
        ...state,
        [id]: {
          ...action.payload,
          id: id
        }
      };
      return newState;
    }

    case 'SUBMIT_ORDER': {
      const id = action.payload;
      const newState = {
        ...state,
        [id]: {
          ...state[id],
          orderedAt: new Date()
        }
      };
      return newState;
    }

    case 'REMOVE_INGREDIENT': {
      const {orderId, ingredientId} = action.payload;
      const newState = {
        ...state,
        [orderId]: {
          ...state[orderId],
          ingredients: state[orderId].ingredients.filter(
            i => i.id !== ingredientId
          )
        }
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};
