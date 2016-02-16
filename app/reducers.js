import {
  SET_USER_NAME,
  SET_MESSAGE,
  SET_VIEW
} from './actions';

function rnWorkshop(state = {}, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return Object.assign({}, state, { username: action.username })
    case SET_MESSAGE:
      return Object.assign({}, state, { message: action.message })
    case SET_VIEW:
      return Object.assign({}, state, { viewName: action.viewName })
    default:
      return state
  }
}

export default rnWorkshop;
