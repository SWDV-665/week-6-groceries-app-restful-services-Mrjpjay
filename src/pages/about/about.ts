import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

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

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  removeItem(item, i){
    this.items.splice(i,1)
  }
  
  addItem(){
    console.log("adding item...");
    this.showAddItemPrompt();
  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

}
