export const NEWS_HAS_ERRORED = 'NEWS_HAS_ERRORED';
export const NEWS_IS_LOADING = 'NEWS_IS_LOADING';
export const NEWS_FETCH_DATA_SUCCESS = 'NEWS_FETCH_DATA_SUCCESS';

export function newsHasErrored() {
  return {
      type: NEWS_HAS_ERRORED,
  };
}

export function newsIsLoading(bool) {
  return {
      type: NEWS_IS_LOADING,
  };
}

export function newsFetchDataSuccess(payload){
  return {
      type: NEWS_FETCH_DATA_SUCCESS,
      payload
  };
}

export function newsFetchData(url) {
  return (dispatch) => {
      dispatch(newsIsLoading());

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(newsIsLoading());

              return response;
          })
          .then((response) => response.json())
          .then((payload) => dispatch(newsFetchDataSuccess(payload['articles'])))
          .catch(() => dispatch(newsHasErrored()));
  };
}