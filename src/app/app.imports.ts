// Global state (used for theming)
import { AppState } from './app.global';

// Providers
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
//import { NativeGoogleMapsProvider } from '../providers/native-google-maps/native-google-maps';

// Ionic native providers

// Directives
import { SlidingDrawer } from '../components/sliding-drawer/sliding-drawer';
import { Autosize } from '../components/autosize/autosize';

// Modules
//import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

export const MODULES = [
  //SwingModule,
  BrowserModule,
  HttpModule,
];

export const PROVIDERS = [
  AlertService,
  ToastService,
  AppState
  //CameraProvider,
  //NativeGoogleMapsProvider,

  // Ionic native specific providers
  
];

export const DIRECTIVES = [
  SlidingDrawer,
  Autosize,
];
