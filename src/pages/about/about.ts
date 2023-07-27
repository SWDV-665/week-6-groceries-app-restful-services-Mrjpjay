import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
    public dataServiceProvider: DataServiceProvider,
    public inputService: InputDialogServiceProvider) {
  }

  editItem(item, index) {
    this.inputService.showPrompt(item, index)
  }
  removeItem(i) {
    this.dataServiceProvider.items.splice(i, 1)
  }

  addItem() {
    console.log("adding item...");
    this.inputService.showPrompt();
  }

  loadItems(){
    return this.dataServiceProvider.getItems()
  }
}
