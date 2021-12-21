import {
  FETCH_CHARACTERS_LIST_REQUEST,
  FETCH_CHARACTERS_LIST_SUCCESS,
  FETCH_CHARACTERS_LIST_FAILED
} from '../types/characters';

export const fetchCharactersListRequest = () => {
  return {
    type: FETCH_CHARACTERS_LIST_REQUEST
  }
};

export const fetchCharactersListSuccess = (payload) => {
  return {
    type: FETCH_CHARACTERS_LIST_SUCCESS,
    payload
  }
};

export const fetchCharactersListFailed = (payload) => {
  return {
    type: FETCH_CHARACTERS_LIST_FAILED,
    payload
  }
};

