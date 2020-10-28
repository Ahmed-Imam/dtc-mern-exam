import api from '../../api';
// import setAuthToken from '../../utils/setAuthToken';
import {saveLocalStorage, removeLocalStorage} from '../../utils/localStorage';

export const loginUser = (data) => {
  
  return async (dispatch) => {
    dispatch({type: 'LOGIN_REQUEST'});
    
    const result = await api.Auth.login(data);
    console.log({result})
    if (result.statusCode === 401) {
      dispatch({type: 'LOGIN_FAILED', payload: result.message});
    } else {
      saveLocalStorage('token', result.token);
      saveLocalStorage('isAuthenticated', true);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: result,
      });

 
    }
  };
};

export const registerUser = (data) => {
  return async (dispatch) => {
    dispatch({type: 'USER_REGISTER_REQUEST'});

    const result = await api.Auth.registerUser(data);
    console.log({result})
    if (result.error) {
      dispatch({type: 'USER_REGISTER_FAILED', payload: result.data.message});
    } else {
      dispatch({
        type: 'USER_REGISTER_SUCCESS',
        payload: result,
      });
    }
  };
};


export const logout = () => {
  return async (dispatch) => {
    dispatch({type: 'LOGOUT_SUCCESS'});
    removeLocalStorage('token')
    removeLocalStorage('isAuthenticated')
  };
};
