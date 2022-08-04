import { USER_ACTION_TYPES } from './userTypes';
export const userReducer = (state = INITIAL_STATE, action) => {
  console.log('dispatched');
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
const INITIAL_STATE = {
  currentUser: null,
};
