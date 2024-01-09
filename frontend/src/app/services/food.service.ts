import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sampale_foods } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sampale_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
