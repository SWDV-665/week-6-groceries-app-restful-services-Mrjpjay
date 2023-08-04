import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
    public dataServiceProvider: DataServiceProvider,
    public inputService: InputDialogServiceProvider,
    public socialSharing: SocialSharing) {
  }

  editItem(item, index) {
    this.inputService.showPrompt(item, index)
  }
  removeItem(index) {
    this.dataServiceProvider.removeItem(index);
  }

  addItem() {
    console.log("adding item...");
    this.inputService.showPrompt();
  }

  loadItems(){
    return this.dataServiceProvider.getItems()
  }

  shareItem(item, index) {

    let message = "item : " + item.name;
    let subject = "Rico";
    // Check if sharing via email is supported
    this.socialSharing.share(message,subject).then(() => {
      console.log("Shared successfully");
    }).catch((error ) => {
      console.log("Error sharing", error);
    });
  }
}
