import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
classes: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;

  size = 40;
  font = 'Arial';
  color = 'blue';

  class1 = ['orange-title', 'small-title']
  class2 = 'underline-title'

  constructor() {}

  ngOnInit(): void {}

}
