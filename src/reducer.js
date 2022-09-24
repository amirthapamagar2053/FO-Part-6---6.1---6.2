const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GOOD":
      state = { ...state, good: state.good + 1 };
      return state;
    case "OK":
      return state.ok;
    case "BAD":
      return state.bad;
    case "ZERO":
      return (state = 0);
    default:
      return state;
  }
};

export default counterReducer;
