import { Component, OnInit, Input, OnDestroy,ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { IonContent, IonImg} from '@ionic/angular/standalone';
import { interval, Observable, Subject, of } from 'rxjs';
import { map, takeUntil ,startWith} from 'rxjs/operators';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-loader-img',
  templateUrl: './loader-img.component.html',
  styleUrls: ['./loader-img.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonImg
   ],
   // Estrategia de detección de cambios para optimizar el rendimiento
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderImgComponent implements OnInit, OnDestroy {
  @Input() images: { src: string; text: string }[] = [];// Imágenes de entrada
  @Input() interval: number = 3000;
  currentImageIndex: number = 0;// Índice de la imagen actual
  texband:string = ''
  image$: Observable<{ src: string; text: string }>;// Observable para la imagen actual
  private stop$ = new Subject<void>();// Subject para detener el Observable

  constructor(private changeDetectorRef: ChangeDetectorRef) { 
    this.image$ = of({ src: '', text: '' });
  }
  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    this.enterFullScreen();// Activa el modo pantalla completa
    this.image$ = interval(this.interval).pipe(
      startWith(0), // Empezar con el índice 0
      map(i => {
        const index = i % this.images.length; // Calcular el índice actual
        this.currentImageIndex = index
        this.changeDetectorRef.markForCheck(); // Marcar para la detección de cambios
        return this.images[index];// Devuelve la imagen actual
      }),
      takeUntil(this.stop$)// Detiene el Observable al destruir el componente
    );
  }
 // Método para entrar en pantalla completa
  enterFullScreen() {
    const elem = document.documentElement as any; // Aserción de tipo a 'any'
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Safari
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE11
      elem.msRequestFullscreen();
    }
  }
  // Método para salir de pantalla completa(observaciones no se sale a menos de que aprietes ESC)
  exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) { // Safari
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) { // IE11
      (document as any).msExitFullscreen();
    }
  }
  ngOnDestroy() {
    this.stop$.next(); // Emite un valor para detener el Observable
    this.stop$.complete();// Cierra el Subject
    this.exitFullScreen(); // Sale del modo pantalla completa
   
  }
}
