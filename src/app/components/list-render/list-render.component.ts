import { ListService } from './../../service/list.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  cars: Car[] = [
    {name: "Porsche 911 GT2", type: "Sprint car", year: 2022},
    {name: "Lamborghini Uracan", type: "Sport SUV", year: 2021 },
    {name: "Ferrari La Ferrari", type: "Hyper Car",year: 2020 },
    {name: "Audi R8", type: "Super Car", year: 2020 },

  ]

  carDetails = '';

  constructor (private listservice:ListService) {}

  ngOnInit(): void {
  }

  showYear(car: Car){

    this.carDetails = `the year of the car ${car.name} is: ${car.year}`;
  
  }

  removeCar(car: Car) {
    console.log('Removing a car...')
  }
}
