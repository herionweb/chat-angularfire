import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

const config = {
  apiKey: 'AIzaSyDpWCIDi8i45GFtCXSZMZ8gbd-2MW2V-zk',
  authDomain: 'firechat-e9dd2.firebaseapp.com',
  databaseURL:
    'https://firechat-e9dd2-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'firechat-e9dd2',
  storageBucket: 'firechat-e9dd2.appspot.com',
  messagingSenderId: '612628758992',
  appId: '1:612628758992:web:28227f697d9289c41939d5',
  measurementId: 'G-XCWX9BCRLV',
};

@NgModule({
  declarations: [AppComponent, ChatComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
