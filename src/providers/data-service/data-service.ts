import { Injectable } from '@angular/core';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  items = [
    {
      name: "Milk",
      quantity: 3
    },

    {
      name: "Water",
      quantity: 2
    },

    {
      name: "Sugar",
      quantity: 1
    },
  ]

  constructor() {
    console.log('Hello DataServiceProvider Provider');
  }

  editItem(item, index){
    this.items[index] = item;
  }
  
  addItem(item){
    this.items.push(item);
  }

  getItems(){
    return this.items
  }
}
