import api from '../../api';

export const getUserInfo = (page, pageSize) => {
  return async (dispatch) => {
    dispatch({type: 'USER_INFO_REQUEST'});

    const result = await api.User.getUsers(page, pageSize);
    if (result.error) {
      dispatch({type: 'USER_INFO_FAILED', payload: result.data.message});
    } else {
      dispatch({
        type: 'USER_INFO_SUCCESS',
        payload: result,
      });
    }
  };
};

export const searchUser = (data) => {
  return async (dispatch) => {
    dispatch({type: 'USER_SEARCH_REQUEST'});

    const result = await api.User.searchUser(data);
    if (result.error) {
      dispatch({type: 'USER_SEARCH_FAILED', payload: result.data.message});
    } else {
      dispatch({
        type: 'USER_SEARCH_SUCCESS',
        payload: result.data
      });
    }
  };
};
