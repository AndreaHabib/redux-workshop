//counter reducer
import {
  INCREMENT,
  DECREMENT,
  RESET,
  COUNTER,
} from "../actions/counterActions";

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        state: ++state.counter,
        ...state,
      };
    case DECREMENT:
      return {
        state: --state.counter,
        ...state,
      };
    case RESET:
      return {
        state: (state.counter = 0),
        ...state,
      };
    case COUNTER:
      return {
        state: state.counter,
        ...state,
      };

    default:
      return state;
  }
};
