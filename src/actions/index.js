import * as actionTypes from '../actionTypes';

export function fetchUsers() {
  return {
    type: actionTypes.FETCH_USERS
  }
}

export function fetchUsersSuccess(payload) {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload
  }
}

export function setSelectedContact(selectedContact) {
  return {
    type: actionTypes.SET_SELECTED_CONTACT,
    selectedContact
  }
}

export function fetchUsersError(error) {
  return {
    type: actionTypes.FETCH_USERS_ERROR,
    error
  }
}