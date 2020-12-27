export default function (state = {}, action) {
  switch (action.type) {
    case "SET_GAME_INFO":
      return action.payload;
    case "SET_GAME_INFO_SS":
      return { ...state, screenshots: action.payload };
    case "SET_GAME_INFO_MOVIES":
      return { ...state, movies: action.payload };
    case "SET_GAME_INFO_ADDITIONS":
      return { ...state, additions: action.payload };
    case "SET_GAME_INFO_SERIES":
      return { ...state, series: action.payload };
      case "SET_GAME_INFO_TROPHIES":
      return { ...state, trophies: action.payload };
    default:
      return state;
  }
}
