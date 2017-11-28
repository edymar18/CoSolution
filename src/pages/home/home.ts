import { Component } from '@angular/core';

import { Http } from '@angular/http';
import { NavController, App } from 'ionic-angular';
// Import pages to allow links to the page
import { CategoryPage } from '../../pages/category/category';

// Service import for items
import { ItemApi } from '../../services/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Http]
})
export class HomePage {

  // The items array to populate with data is created
  items: any;

  constructor(
              public navCtrl: NavController,
              
              private itemApi: ItemApi,
              public app: App
            )
            {}


  logout(){
    //Api Token Logout 
    const root = this.app.getRootNav();
    root.popToRoot();
  }          
  // This is where the data loads from the service.
  // It happens when the view loads for the first time.
  ionViewDidLoad() {
    this.itemApi.getItems().then(data => this.items = data);
  }

  // This function is an event to listen to clicks on elements.
  // The SingleItem Page has been included to be passed in this function.
  CategoryTapped($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Infraestructura'
    });
  }

  CategoryTapped_2($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Salud'
    });
  }

  CategoryTapped_3($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Seguridad'
    });
  }

  CategoryTapped_4($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'CulturayDeporte'
    });
  }

  CategoryTapped_5($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Otros'
    });
  }

}
