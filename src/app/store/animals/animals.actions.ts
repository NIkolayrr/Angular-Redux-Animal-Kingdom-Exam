import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../app.state';

import { AnimalsService } from '../../animals/animal.service';

export const ADD_ANIMAL = 'add/ANIMAL';
export const ALL_ANIMALS = 'all/ANIMALS';
export const ANIMAL_DETAILS = 'animal/DETAILS';
export const ANIMALS_MINE = 'animals/MINE';
export const ANIMAL_DELETE = 'animal/DELETE';
export const ADD_COMMENT = 'add/COMMENT';
export const ALL_COMMENTS = 'all/COMMENTS';

@Injectable()
export class AnimalsActions {
  constructor(private animalsService: AnimalsService,
    private ngRedux: NgRedux<IAppState>) {
  }

  addAnimal(animal) {
    this.animalsService
      .addAnimal(animal)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: ADD_ANIMAL,
          result
        })
      })
  }

  allAnimals(page = 1, search = null) {
    this.animalsService
      .allAnimals(page, search)
      .subscribe(animals => {
        this.ngRedux.dispatch({
          type: ALL_ANIMALS,
          animals
        })
      })
  }

  details(id) {
    this.animalsService
      .details(id)
      .subscribe(animal => {
        this.ngRedux.dispatch({
          type: ANIMAL_DETAILS,
          animal
        })
      })
  }

  addComment(comment, id) {
    this.animalsService
      .addComment(comment, id)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: ADD_COMMENT,
          result
        })
      })
  }

  allComments(id) {
    this.animalsService
      .allComments(id)
      .subscribe(comments => {
        this.ngRedux.dispatch({
          type: ALL_COMMENTS,
          comments
        })
      })
  }

  mine() {
    this.animalsService
      .mine()
      .subscribe(animals => {
        this.ngRedux.dispatch({
          type: ANIMALS_MINE,
          animals
        })
      })
  }

  delete(id) {
    this.animalsService
      .delete(id)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: ANIMAL_DELETE,
          result,
          id
        })
      })
  }

}
