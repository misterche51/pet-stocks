import {
  NEWS_HAS_ERRORED,
  NEWS_IS_LOADING,
  NEWS_FETCH_DATA_SUCCESS,
  NEWS_IS_FOCUSED
} from '../actions/newsActions'

const initialState = {
  newsIsLoading: false,
  newsHasArrored: false,
  news: [],
  newsIsFocused : false,
};

export function newsReducer(state = initialState, {type, payload}) {
  switch(type) {
    case NEWS_IS_LOADING:
      return {
        ...state,
        newsIsLoading: true,
      };
     case NEWS_HAS_ERRORED:
       return {
         ...state,
         newsIsLoading: false,
         newsHasArrored: true,
       };
      case NEWS_FETCH_DATA_SUCCESS:
        return {
          ...state,
          newsIsLoading: false,
          newsHasArrored: false,
          news: payload,
        }
      case NEWS_IS_FOCUSED:
        return {
          ...state,
          newsIsFocused: !state.newsIsFocused,
        }
        default:
          return state;
  }
}