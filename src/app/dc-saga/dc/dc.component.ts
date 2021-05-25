import { Component, Input, OnInit } from '@angular/core';
import { DC } from './dc.model';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  @Input() dcs: DC;

  constructor() { }

  ngOnInit(): void {
  }
}