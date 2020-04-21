export const CRYPTO_HAS_ERRORED = 'CRYPTO_HAS_ERRORED';
export const CRYPTO_IS_LOADING = 'CRYPTO_IS_LOADING';
export const CRYPTO_FETCH_DATA_SUCCESS = 'CRYPTO_FETCH_DATA_SUCCESS';
export const CRYPTO_SORT_IS_OPEN = 'CRYPTO_SORT_IS_OPEN';


export function cryptoSortIsOpen() {
  return {
    type: CRYPTO_SORT_IS_OPEN,
  }
};

export function cryptoHasErrored() {
  return {
      type: CRYPTO_HAS_ERRORED,
  };
}

export function cryptoIsLoading(bool) {
  return {
      type: CRYPTO_IS_LOADING,
  };
}

export function cryptoFetchDataSuccess(payload){
  return {
      type: CRYPTO_FETCH_DATA_SUCCESS,
      payload
  };
}

export function cryptoFetchData(url) {
  return (dispatch) => {
      dispatch(cryptoIsLoading());

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(cryptoIsLoading());

              return response;
          })
          .then((response) => response.json())
          .then((payload) => dispatch(cryptoFetchDataSuccess(payload)))
          .catch(() => dispatch(cryptoHasErrored()));
  };
}

