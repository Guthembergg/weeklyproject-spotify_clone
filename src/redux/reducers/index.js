const initialState = {
  music: [],
  player:[]
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MUSIC":
      return {
        ...state,
        music: [...state.music, ...action.payload],
      };
      case "PLAYER":
        return {
          ...state,player:[action.payload]
        }
    default:
      return state;
  }
};
export default mainReducer;
