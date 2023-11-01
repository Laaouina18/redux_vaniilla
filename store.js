const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

function increment() {
  return {
    type: INCREMENT
  };
}

function decrement() {
  return {
    type: DECREMENT
  };
}

function reset() {
  return {
    type: RESET
  };
}

const initialState = {
  count: 0
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

const store = Redux.createStore(countReducer);

document.getElementById('increment').addEventListener('click', function() {
  store.dispatch(increment());
});

document.getElementById('decrement').addEventListener('click', function() {
  store.dispatch(decrement());
});

document.getElementById('reset').addEventListener('click', function() {
  store.dispatch(reset());
});

store.subscribe(() => {
  document.getElementById('value').innerHTML = store.getState().count;
});
