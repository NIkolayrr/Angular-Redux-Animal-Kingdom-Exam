import { initialState } from './animals.state';

import {
  ADD_ANIMAL,
  ALL_ANIMALS,
  ANIMAL_DETAILS,
  ADD_COMMENT,
  ANIMALS_MINE,
  ALL_COMMENTS,
  ANIMAL_DELETE
} from './animals.actions';

function addCar(state, action) {
  const result = action.result;
  return Object.assign({}, state, {
    animalAdded: result.success,
    animalAddedId: result.success ? result.animal.id : null
  })
}

function allAnimals(state, action) {
  return Object.assign({}, state, {
    allAnimals: action.animals
  })
}

function animalDetails(state, action) {
  return Object.assign({}, state, {
    animalDetails: action.animal
  })
}

function addComment(state, action) {
  const result = action.result;
  if (result.success) {
    const review = result.review;
    const annimalComments = state.animalComments;
    return Object.assign({}, state, {
      annimalComments
    })
  }

  return state;
}

function allComments(state, action) {
  return Object.assign({}, state, {
    animalComments: action.comments
  })
}

function mineAnimals(state, action) {
  return Object.assign({}, state, {
    myAnimals: action.animals
  })
}

function animalDelete(state, action) {
  const result = action.result;
  if (result.success) {
    const id = action.id;
    const animalIndex = state.myAnimals.findIndex(animal => animal.id === id)

    if (animalIndex >= 0) {
      const myAnimals = state.myAnimals.slice(0);
      myAnimals.splice(animalIndex, 1);
      return Object.assign({}, state, {
        myAnimals
      })
    }
  }

  return state;
}

export function animalsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ANIMAL:
      return addCar(state, action);
    case ALL_ANIMALS:
      return allAnimals(state, action);
    case ANIMAL_DETAILS:
      return animalDetails(state, action);
    case ANIMALS_MINE:
      return mineAnimals(state, action);
    case ANIMAL_DELETE:
      return animalDelete(state, action);
    case ADD_COMMENT:
      return addComment(state, action);
    case ALL_COMMENTS:
      return allComments(state, action);
    default:
      return state;
  }
}
