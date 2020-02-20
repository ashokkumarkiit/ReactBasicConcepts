import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async function(dispatch, getState) {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response
    });
  };
};

/* Similar to Above in ES-2015 Syntax */
/* export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response
    });
}; */
