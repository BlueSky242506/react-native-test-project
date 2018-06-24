import { GET_RANDOM_DOG, GET_BREED_LIST, GET_BREED_DOG } from "./types";

export const saveRandomDog = (url) => ({
  type: GET_RANDOM_DOG,
  url
});

export const saveBreedList = (data) => ({
  type: GET_BREED_LIST,
  data
});

export const saveBreedDog = (data) => ({
  type: GET_BREED_DOG,
  data
});

export const get_random_dog = () => {
  return (dispatch, getState) => {
    fetch("https://dog.ceo/api/breeds/image/random", {
      method: "GET"
    }).then(response => {
      response.json()
        .then(responseJSON => {
          dispatch(saveRandomDog(responseJSON.message));
        })
    })
  };
};

export const get_breed_list = () => {
  return (dispatch, getState) => {
    fetch("https://dog.ceo/api/breeds/list/all", {
      method: "GET"
    }).then(response => {
      response.json()
        .then(responseJSON => {
          let obj = responseJSON.message
          let list = []
          for (const key of Object.keys(obj)) {
            list.push({key})
          }
          dispatch(saveBreedList(list));
        })
    })
  };
};

export const get_breed_dog = (breed) => {
  return (dispatch, getState) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`, {
      method: "GET"
    }).then(response => {
      response.json()
        .then(responseJSON => {
          try {
            dispatch(saveBreedDog({
              breed,
              url: responseJSON.message[0]
            }));
          } 
          catch (e) {
            console.error(e)
          }
        })
    })
  };
};