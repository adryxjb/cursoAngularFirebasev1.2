import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs/Observable";
import { Producto } from "../../../interfaces/producto";

@Injectable()
export class ConectionService {
  private productosCollection: AngularFirestoreCollection<Producto>;
  productos: Observable<Producto[]>;

  constructor(private afs: AngularFirestore) {
    this.productosCollection = afs.collection<Producto("productos")>;
    this.productos = this.productosCollection.valueChanges();
  }
}
