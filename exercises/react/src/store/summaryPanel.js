/*************
 * Selectors *
 *************/

export const getCompletedOrders = state => {
  return state.summaryPanel.completedOrders;
};

/********************
 * Actions creators *
 ********************/

export const incrementCompletedOrders = () => ({
  type: 'INCREMENT_COMPLETED_ORDERS'
});
export const decrementCompletedOrders = () => ({
  type: 'DECREMENT_COMPLETED_ORDERS'
});

/*****************
 * Initial state *
 *****************/

const initialState = {
  completedOrders: 0
};

/***********
 * Reducer *
 ***********/

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COMPLETED_ORDERS': {
      const newState = {
        ...state,
        completedOrders: state.completedOrders + 1
      };
      return newState;
    }

    case 'DECREMENT_COMPLETED_ORDERS': {
      const newState = {
        ...state,
        completedOrders: state.completedOrders - 1
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};
