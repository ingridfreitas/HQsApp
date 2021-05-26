import { Component, Input, OnInit } from '@angular/core';
import { Marvel } from './marvel.model';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  @Input() sagas: Marvel;

  constructor() { }

  ngOnInit(): void {
  }

}
