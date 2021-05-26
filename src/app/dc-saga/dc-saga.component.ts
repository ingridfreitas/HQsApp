import { Component, OnInit } from '@angular/core';
import { DcSagaService } from './dc-saga.service';
import { Dc } from './dc/dc.model';

@Component({
  selector: 'app-dc-saga',
  templateUrl: './dc-saga.component.html',
  styleUrls: ['./dc-saga.component.css']
})
export class DcSagaComponent implements OnInit {

  dcs: Dc[];

  constructor(private dcSaga: DcSagaService) { }

  ngOnInit(): void {
    this.dcs = this.dcSaga.hqs();
    console.log(this.dcs)

  }

}
