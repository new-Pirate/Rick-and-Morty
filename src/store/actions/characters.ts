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

export const fetchCharactersListSuccess = (payload: any) => {
  return {
    type: FETCH_CHARACTERS_LIST_SUCCESS,
    payload
  }
};

export const fetchCharactersListFailed = (payload: any) => {
  return {
    type: FETCH_CHARACTERS_LIST_FAILED,
    payload
  }
};

export const gerCharactersList = (name: string, page = 1) => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  dispatch(fetchCharactersListRequest());

  API.get(name, page)
    .then((res) => {
      dispatch(fetchCharactersListSuccess(res));
    })
    .catch((err) => {
      dispatch(fetchCharactersListFailed(err));
    });
};
