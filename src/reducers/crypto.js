import {
  CRYPTO_HAS_ERRORED,
  CRYPTO_IS_LOADING,
  CRYPTO_FETCH_DATA_SUCCESS,
} from '../actions/cryptoActions'


const initialState = {
  cryptoIsLoading: false,
  cryptoHasArrored: false,
  cryptoData: [],
}

export function cryptoReducer(state = initialState, {type, payload}) {
  switch(type) {
    case CRYPTO_IS_LOADING:
      return {
        ...state,
        cryptoIsLoading: true,
      };
     case CRYPTO_HAS_ERRORED:
       return {
         ...state,
         cryptoIsLoading: false,
         cryptoHasArrored: true,
       };
      case CRYPTO_FETCH_DATA_SUCCESS:
        return {
          ...state,
          cryptoIsLoading: false,
          cryptoHasArrored: false,
          cryptoData: payload,
        }
        default:
          return state;
  }
}