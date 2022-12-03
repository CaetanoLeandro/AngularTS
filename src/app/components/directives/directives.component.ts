import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 40;
  font = 'Arial';
  color = 'blue';

  class1 = ['orange-title', 'small-title']
  class2 = 'underline-title'

  constructor() {}

  ngOnInit(): void {}

}
