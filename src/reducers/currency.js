import {
  CURRENCY_HAS_ERRORED,
  CURRENCY_IS_LOADING,
  CURRENCY_FETCH_DATA_SUCCESS,
} from '../actions/currencyActions'


const initialState = {
  currencyIsLoading: false,
  currencyHasArrored: false,
  currencyData: [],
}

export function currencyReducer(state = initialState, {type, payload}) {
  switch(type) {
    case CURRENCY_IS_LOADING:
      return {
        ...state,
        currencyIsLoading: true,
      };
     case CURRENCY_HAS_ERRORED:
       return {
         ...state,
         currencyIsLoading: false,
         currencyHasArrored: true,
       };
      case CURRENCY_FETCH_DATA_SUCCESS:
        return {
          ...state,
          currencyIsLoading: false,
          currencyHasArrored: false,
          currencyData: payload,
        }
        default:
          return state;
  }
}