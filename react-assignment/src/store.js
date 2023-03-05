import { createStore } from "redux";

const reducerFunction = (state = { text: "" }, action) => {
  if (action.type === "update") {
    return {
      text: action.payload,
    };
  }
  return state;
};

const store = createStore(reducerFunction);

export default store;
