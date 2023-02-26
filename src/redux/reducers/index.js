const initialState = {
  music: [],
  player: [],
  favourite: [],
  search: "",
  music_search: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.payload };
    case "ADD_MUSIC":
      return {
        ...state,
        music: [...state.music, ...action.payload],
      };
    case "ADD_MUSIC_SEARCH":
      return {
        ...state,
        music_search: [action.payload],
      };
    case "PLAYER":
      return {
        ...state,
        player: [action.payload],
      };
    case "FAVOURITE":
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        favourite: state.favourite.filter((el) => el !== action.payload),
      };
    default:
      return state;
  }
};
export default mainReducer;
