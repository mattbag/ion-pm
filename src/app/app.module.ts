import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Database } from '../providers/database/database';
import { AngularFireDatabaseModule } from "angularfire2/database";

export const firebaseConfig = {
  apiKey: "AIzaSyAj3HXzt1kpV2YlFi4fIHSRmFM77oKuYEg",
    authDomain: "atlasgo-caa32.firebaseapp.com",
    databaseURL: "https://atlasgo-caa32.firebaseio.com",
    projectId: "atlasgo-caa32",
    storageBucket: "atlasgo-caa32.appspot.com",
    messagingSenderId: "29854285269"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Database
  ]
})
export class AppModule {}
