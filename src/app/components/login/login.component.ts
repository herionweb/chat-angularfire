import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public _chatService: ChatService) {}

  ngOnInit(): void {}

  ingresar(proveedor: string) {
    this._chatService.login(proveedor);
  }
}
