import { GET_RANDOM_DOG, GET_BREED_LIST, GET_BREED_DOG } from "../actions/types";

const defaultState = {
  breed: null,
  list: [],
  url: null
};

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case GET_RANDOM_DOG: {
      return {
        ...state,
        breed: "random",
        url: action.url
      };
    }
    case GET_BREED_LIST: {
      return {
        ...state,
        list: action.data,
      };
    }
    case GET_BREED_DOG: {
      return {
        ...state,
        breed: action.data.breed,
        url: action.data.url
      };
    }

    default:
      return state;
  };
};
