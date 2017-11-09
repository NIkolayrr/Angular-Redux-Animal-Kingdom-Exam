import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AnimalsActions } from '../store/animals/animals.actions';
import { AnimalsService } from './animal.service';

import { AddAnimalComponent } from './add-animal.component';
import { ListAnimalsComponent } from './list-animals.component';
import { AnimalDetailsComponent } from './animal-details.component';

@NgModule({
  declarations: [
    AddAnimalComponent,
    ListAnimalsComponent,
    AnimalDetailsComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [
    AnimalsActions,
    AnimalsService
  ]
})
export class AnimalsModule {

}
