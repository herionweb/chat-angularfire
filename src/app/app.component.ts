import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatService } from './providers/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(firestore: AngularFirestore, public _chatService: ChatService) {}

  salir() {
    this._chatService.logout();
    // console.log('Saliste');
  }
}
