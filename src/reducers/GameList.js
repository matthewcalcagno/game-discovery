export default function(state = {}, action) {
   switch (action.type) {
    case "GET_GAMES":
        return {...action.payload}
    case "GET_MORE_GAMES":
        return {previous: action.payload.previous, next: action.payload.next, results: [ ...state.results, ...action.payload.results] }
    
    default:
        return state
   }
}