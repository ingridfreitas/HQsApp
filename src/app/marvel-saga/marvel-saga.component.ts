import { Component, OnInit } from '@angular/core';
import { MarvelSagaService } from './marvel-saga.service';
import { Marvel } from './marvel/marvel.model';

@Component({
  selector: 'app-marvel-saga',
  templateUrl: './marvel-saga.component.html',
  styleUrls: ['./marvel-saga.component.css']
})
export class MarvelSagaComponent implements OnInit {

  saga: Marvel[];

  constructor(private sagaService: MarvelSagaService) { }

  ngOnInit(): void {
    this.saga = this.sagaService.marvels();
  }

}