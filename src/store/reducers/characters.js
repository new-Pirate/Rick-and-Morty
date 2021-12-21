import {
  FETCH_CHARACTERS_LIST_REQUEST,
  FETCH_CHARACTERS_LIST_SUCCESS,
  FETCH_CHARACTERS_LIST_FAILED
} from '../types/characters';

const initialState = {
  loading: false,
  error: null,
  charactersList: []
}

export const charactersReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHARACTERS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        charactersList: []
      };

    case FETCH_CHARACTERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        charactersList: payload
      };

    case FETCH_CHARACTERS_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.message
      };

    default:
      return state;
  }
};
