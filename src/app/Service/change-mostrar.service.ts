import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChangeMostrarService {

  private mostrarSource = new BehaviorSubject<boolean>(false);
  currentMostrar = this.mostrarSource.asObservable();

  constructor() { }

  changeMostrar(value: boolean) {
    this.mostrarSource.next(value);
  }
}
