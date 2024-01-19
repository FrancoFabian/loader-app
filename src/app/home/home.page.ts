import { Component, inject,ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonInput } from '@ionic/angular/standalone';
import { LoaderImgComponent } from '../Loader/loader-img/loader-img.component';
import { ChangeMostrarService } from '../Service/change-mostrar.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            LoaderImgComponent,
            IonButton,
            IonIcon,
            IonInput,
            FormsModule
           ],
})

export class HomePage {
  @ViewChild(LoaderImgComponent, { static: false }) loaderComponent!: LoaderImgComponent;
  private router = inject(Router)
  //valor por defecto para cada intervalo en caso de no ingresar nada en el input
  intervalTime: number = 5000;
  inputIntervalTime?: number | null;
  imagenes: { src: string; text: string }[] = [
    { src: '../../assets/img/1.jpg', text: 'Welcome to my test' },
    { src: '../../assets/img/2.jpg', text: 'This is the image uploader.' },
    { src: '../../assets/img/3.jpg', text: 'I did it in Angular 17 and Ionic v7.' },
    { src: '../../assets/img/4.jpg', text: 'Texto para imagen 4' },
    { src: '../../assets/img/5.jpg', text: 'Texto para imagen 5' },
    { src: '../../assets/img/6.jpg', text: 'Texto para imagen 6' },
    { src: '../../assets/img/7.jpg', text: 'Texto para imagen 7' },
    { src: '../../assets/img/8.jpg', text: 'Texto para imagen 8' },
    { src: '../../assets/img/9.jpg', text: 'Texto para imagen 9' },
  ];
  /**
   * Lleva a cabo si es false mantendra los elementos inicialmente 
   */
  mostrar: boolean = false;
  constructor(private share:ChangeMostrarService) {
    this.share.currentMostrar.subscribe(mostrar => {
      this.mostrar = mostrar;
    });
}
  
  mostrarLoader() {
    this.share.changeMostrar(true);
     // Convertir el tiempo de entrada a milisegundos
    if (this.inputIntervalTime) {
      this.intervalTime = this.inputIntervalTime * 1000;
    }
  // Usar el valor de intervalTime para el setTimeout
    setTimeout(() => {
      this.inputIntervalTime = null
      this.router.navigate(['rutaFinal'])
     
    }, this.intervalTime * (this.imagenes.length + 1)); // Nota el cambio aquí
  }
  
  
}
