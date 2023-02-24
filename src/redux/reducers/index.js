const initialState = {
  music: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MUSIC":
      return {
        ...state,
        music: [...state.music, ...action.payload],
      };
    default:
      return state;
  }
};
export default mainReducer;
