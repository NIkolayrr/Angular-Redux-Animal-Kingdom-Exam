export interface IAnimalsState {
  animalAdded: boolean,
  animalAddedId: number,
  allAnimals: Array<object>,
  animalDetails: object,
  animalComments: Array<object>,
  myAnimals: Array<object>
}

export const initialState: IAnimalsState = {
  animalAdded: false,
  animalAddedId: null,
  allAnimals: [],
  animalDetails: {},
  animalComments: [],
  myAnimals: []
};
