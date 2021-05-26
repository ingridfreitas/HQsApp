import { Component, OnInit } from '@angular/core';
import { on } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  value: string

  constructor() { }

  ngOnInit(): void {
  }

}