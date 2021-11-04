import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { chatModel } from '../models/chat.module';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<chatModel>;
  public chats: chatModel[] = [];
  usuario: any = {};

  constructor(private afs: AngularFirestore, public auth: AngularFireAuth) {
    //importantisimo y clave para sacar la informacion del usuario logueado
    this.auth.authState.subscribe((user) => {
      if (!user) {
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
  }

  login(proveedor: string) {
    if (proveedor === 'Google') {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  logout() {
    this.usuario = {};
    // console.log(this.usuario);
    this.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<chatModel>('chats', (ref) =>
      ref.orderBy('fecha', 'desc').limit(20)
    );
    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: chatModel[]) => {
        this.chats = [];

        for (const mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }

        return this.chats;
      })
    );
  }

  agregarMensaje(texto: string) {
    let mensaje: chatModel = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid,
    };

    return this.itemsCollection.add(mensaje);
  }
}
