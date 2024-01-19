import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { IonTitle, IonContent, IonText, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ChangeMostrarService } from 'src/app/Service/change-mostrar.service';

@Component({
  selector: 'app-ruta-final',
  templateUrl: './ruta-final.component.html',
  styleUrls: ['./ruta-final.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonContent,
    IonText,
    IonButton,
    IonIcon
   ]
})
export class RutaFinalComponent  implements OnInit {
private routes = inject(Router)
  constructor(private share:ChangeMostrarService) { }

  ngOnInit() {}
  goHome(){
    this.share.changeMostrar(false);
    this.routes.navigate(['home'])
  }

}
