
const initialState = {
  data: [],
  isLoading: false,
  error: false,
  errorMsg: '',
  currentPage:0,
  totalPages: 0
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_INFO_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
        errorMsg: ''
      }
    case 'USER_INFO_FAILED':
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMsg: action.payload
      }
    case 'USER_INFO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
      }

    default:
      return state;
  }
};

export default usersReducer