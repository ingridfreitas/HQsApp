import { Component, OnInit } from '@angular/core';
import { DcSagaService } from './dc-saga.service';
import { DC } from './dc/dc.model';

@Component({
  selector: 'app-dc-saga',
  templateUrl: './dc-saga.component.html',
  styleUrls: ['./dc-saga.component.css']
})
export class DcSagaComponent implements OnInit {

  saga: DC[];

  constructor(private sagaService: DcSagaService) { }

  ngOnInit(): void {
    this.saga = this.sagaService.dcs();
    console.log(this.saga)
  }

}