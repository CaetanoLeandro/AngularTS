import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name : string =  'Leandro';
  hobbies = ['play xbox', 'play a guittar'];
  car = {
    name: 'Stilo',
    year: 2003
  }
  
  constructor () { }
  ngOnInit(): void {
  }
}
