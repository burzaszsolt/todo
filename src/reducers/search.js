import { SEARCH_TODO } from "../actions/actionNames";

export default function reducer(state = "", action) {
  switch (action.type) {
    case SEARCH_TODO: {
      return action.payload.search;
    }
    default:
      return state;
  }
}
