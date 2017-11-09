import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store/app.state';

import { AnimalsActions } from '../store/animals/animals.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  animals: Array<object> = [];

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private animalActions: AnimalsActions
  ) { }

  ngOnInit() {
    this.animalActions.mine();
    this.ngRedux
      .select(state => state.animals.myAnimals)
      .subscribe(animals => {
        this.animals = animals
      })
  }

  delete(id) {
    this.animalActions.delete(id);
  }
}
