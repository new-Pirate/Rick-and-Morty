import {
  FETCH_CHARACTERS_LIST_REQUEST,
  FETCH_CHARACTERS_LIST_SUCCESS,
  FETCH_CHARACTERS_LIST_FAILED
} from '../types/characters';

import { BASE_API } from '../../services';

const API = new BASE_API();

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

export const gerCharactersList = (name, page) => (dispatch) => {
  dispatch(fetchCharactersListRequest());

  API.get(name, page)
    .then((res) => {
      dispatch(fetchCharactersListSuccess(res));
    })
    .catch((err) => {
      dispatch(fetchCharactersListFailed(err));
    });
};
