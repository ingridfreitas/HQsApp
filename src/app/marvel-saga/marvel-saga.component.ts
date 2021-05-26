import { Component, OnInit } from '@angular/core';
import { MarvelSagaService } from './marvel-saga.service';
import { Marvel } from './marvel/marvel.model';

@Component({
  selector: 'app-marvel-saga',
  templateUrl: './marvel-saga.component.html',
  styleUrls: ['./marvel-saga.component.css']
})
export class MarvelSagaComponent implements OnInit {

  marvels: Marvel[];

  constructor(private marvelSaga: MarvelSagaService) { }

  ngOnInit(): void {
    this.marvels = this.marvelSaga.hqs();
    console.log(this.marvels)
  }

}
