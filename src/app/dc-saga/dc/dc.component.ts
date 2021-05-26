import { Component, Input, OnInit } from '@angular/core';
import { Dc } from './dc.model';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  @Input() sagas: Dc;

  constructor() { }

  ngOnInit(): void {
  }

}
