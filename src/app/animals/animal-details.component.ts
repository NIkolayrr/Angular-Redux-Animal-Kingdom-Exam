import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store/app.state';

import { AnimalsActions } from '../store/animals/animals.actions';
import { CommentModel } from './comment-model'

@Component({
  selector: 'app-car-details',
  templateUrl: './animal-details.component.html'
})
export class AnimalDetailsComponent implements OnInit {
  private animalId: number;
  animal: object = {};
  comments: Array<object> = [];
  comment: CommentModel = new CommentModel();

  constructor(private route: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>,
    private animalsActions: AnimalsActions) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const id = params['id'];

        this.animalsActions.details(id);

        this.ngRedux
        .select(state => state.animals)
        .subscribe(animals => {
          this.animal = animals.animalDetails;
          this.comments = animals.animalComments;
        })
    })
  }

  addComment() {
    console.log('lol not working');
    this.animalsActions
    .addComment(this.comment, this.animal['id'])
  }
}
