export const CURRENCY_HAS_ERRORED = 'CURRENCY_HAS_ERRORED';
export const CURRENCY_IS_LOADING = 'CURRENCY_IS_LOADING';
export const CURRENCY_FETCH_DATA_SUCCESS = 'CURRENCY_FETCH_DATA_SUCCESS';
export const CURRENCY_CONVERT_IS_OPEN = 'CURRENCY_CONVERT_IS_OPEN';

export function currencyConvertIsOpen() {
  return {
    type: CURRENCY_CONVERT_IS_OPEN,
  }
};

export function currencyHasErrored() {
  return {
      type: CURRENCY_HAS_ERRORED,
  };
}

export function currencyIsLoading(bool) {
  return {
      type: CURRENCY_IS_LOADING,
  };
}

export function currencyFetchDataSuccess(payload){
  return {
      type: CURRENCY_FETCH_DATA_SUCCESS,
      payload
  };
}

export function currencyFetchData(url) {
  return (dispatch) => {
      dispatch(currencyIsLoading());

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(currencyIsLoading());

              return response;
          })
          .then((response) => response.json())
          .then((payload) => dispatch(currencyFetchDataSuccess(payload)))
          .catch(() => dispatch(currencyHasErrored()));
  };
}