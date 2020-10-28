// Let's persist this soon
import {getLocalStorage} from '../utils/localStorage';
const initialState = {
  isAuthenticated: getLocalStorage('isAuthenticated') || false,
  token:getLocalStorage('token') || false,
  isLoading: false,
  error: false,
  message:'',
  registerSuccess: false,
  registerError: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isLoading: true,
        erro: false,
        message: ''
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: false,
        isAuthenticated: true,
        token: action.payload.token,
        message: '',
      };
    case 'USER_REGISTER_REQUEST':
        return {
          ...state,
          isLoading: true,
          registerError: false,
          message: ''
        };
    case 'USER_REGISTER_FAILED':
        return {
          ...state,
          isLoading: false,
          registerError: true,
          message: action.payload,
        };
    case 'USER_REGISTER_SUCCESS':
        return {
          ...state,
          isLoading: false,
          registerError: false,
          registerSuccess: true,
          message: action.payload.message,
        };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        message: '',
      };
    default:
      return state;
  }
};

export default authReducer;
