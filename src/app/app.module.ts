import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PROVIDERS } from './app.imports';
// Http import
import { HttpModule } from '@angular/http';

// Page imports
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SingleItem } from '../pages/single-item/single-item';
import { CategoryPage } from '../pages/category/category';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { InicioPage } from '../pages/inicio/inicio';

// Service imports
import { ItemApi } from '../services/item-api.service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CategoryPage,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    ListPage,
    HomePage,
    SingleItem,
    TabsPage,
    ProfilePage,
    InicioPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    CategoryPage,
    ListPage,
    HomePage,
    SingleItem,
    TabsPage,
    ProfilePage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemApi,
    HttpModule,
    PROVIDERS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
