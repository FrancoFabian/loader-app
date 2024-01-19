import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'loaderImg',
    loadComponent:()=> import('./Loader/loader-img/loader-img.component').then((m)=>m.LoaderImgComponent) 
  },
  {
    path:"rutaFinal",
    loadComponent:()=>import('./Loader/ruta-final/ruta-final.component').then((m)=>m.RutaFinalComponent)
  }
];
