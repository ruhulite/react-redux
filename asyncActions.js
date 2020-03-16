//redux
const redux = require('redux');
const createStore = redux.createStore;

//State
const initialState = {
  loading: false,
  users: [],
  error: '',
};

//Actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

//action creators
const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUserSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST: 
    return {
      ...state,
      loading: true
    }

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    
    case FETCH_USERS_FAILURE: 
    return {
      loading: false,
      users: [],
      error: action.payload
    }
  }
};


const store = createStore(reducer);