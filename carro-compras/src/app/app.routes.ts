import { Routes } from '@angular/router';
import { CatalogoInicioComponent } from './components/catalogo/catalogo-inicio/catalogo-inicio.component';
import { CarroListarComponent } from './components/carro/carro-listar/carro-listar.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
  { path: '', component: CatalogoInicioComponent },
  { path: 'carro', component: CarroListarComponent },
  { path : 'registro', component: RegistroComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];