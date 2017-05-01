import * as actionTypes from '../actionTypes'

export default (prevState = {contacts: [], selectedContact: {}}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return Object.assign({}, prevState, {isFetching: true});
    case actionTypes.FETCH_USERS_SUCCESS:
      let newState = Object.assign({}, prevState, {isFetching: false}, {contacts: action.payload.results});
      return newState;
    case actionTypes.FETCH_USERS_ERROR:
      return Object.assign({}, prevState, {isFetching: false}, {error: action.error});
    case actionTypes.SET_SELECTED_CONTACT:
      return Object.assign({}, prevState, {selectedContact: action.selectedContact});
    default:
      return prevState;
  }
}