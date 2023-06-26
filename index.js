const redux = require("redux");
const createStore = redux.createStore;

const ORDER_CAKE = "ORDER_CAKE";

const orderCake = () => {
  return {
    type: ORDER_CAKE,
    qty: 1,
  };
};

const initialState = {
  numberOfCakes: 10,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(orderReducer);

console.log("Initial state", store.getState());
const subscribe = store.subscribe(() =>
  console.log("Subscribed", store.getState())
);
console.log("Dis1", store.dispatch(orderCake()));
console.log("Dis2", store.dispatch(orderCake()));
console.log("Dis3", store.dispatch(orderCake()));
subscribe();
