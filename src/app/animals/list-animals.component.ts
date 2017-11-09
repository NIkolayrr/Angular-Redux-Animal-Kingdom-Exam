import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store/app.state'

import { AnimalsActions } from '../store/animals/animals.actions';

@Component({
  selector: 'list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent {
  page: number = 1;
  searchText: string = '';
  animals: Array<object> = [];
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
    private animalsActions: AnimalsActions
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.page = +params['page'] || 1;
        this.searchText = params['search'];

        this.animalsActions.allAnimals(this.page, this.searchText);
        this.ngRedux
          .select(state => state.animals.allAnimals)
          .subscribe(animals => this.animals = animals)
      });
  }

  search() {
    this.router.navigateByUrl(`animals/all?search=${this.searchText}`);
  }

  prevPage() {
    if (this.page === 1) {
      return;
    }

    const url = this.getUrl(this.page - 1);
    this.router.navigateByUrl(url);
  }

  nextPage() {
    if (this.animals.length === 0 || this.animals.length < 10) {
      return
    }

    const url = this.getUrl(this.page + 1);
    this.router.navigateByUrl(url);
  }

  private getUrl(page) {
    let url = `animals/all?page=${page}`;
    if (this.searchText) {
      url += `&search=${this.searchText}`
    }

    return url
  }

}
