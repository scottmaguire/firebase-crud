import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';




export const firebaseConfig = {
 apiKey: 'AIzaSyD0qRs_B_2GgtFawMG2BWeUKADTReRxOeY-key',
 authDomain: 'fir-crud-c077e.firebaseapp.com',
  databaseURL: 'https://fir-crud-c077e.firebaseio.com',
 storageBucket: 'fir-crud-c077e.appspot.com',
 messagingSenderId: '236295537370'
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
