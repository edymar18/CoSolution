import { Component } from '@angular/core';
import { ListPage } from '../list/list';
import { InicioPage } from '../inicio/inicio';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicioPage;
  tab2Root = ListPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
