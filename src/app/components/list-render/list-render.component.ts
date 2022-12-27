import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  cars = [
    {name: "Porsche 911 GT2", type: "Sprint car"},
    {name: "Lamborghini Uracan", type: "Sport SUV" },
    {name: "Ferrari La Ferrari", type: "Hyper Car" },
    {name: "Audi R8", type: "Super Car" },
  ]


  constructor () {}

  ngOnInit(): void {
  }

}
