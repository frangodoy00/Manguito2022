import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component';
import { CreateEmprendimientoComponent } from './create-emprendimiento/create-emprendimiento.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { EditEmprendimientoComponent } from './edit-emprendimiento/edit-emprendimiento.component';
import { HomeComponent } from './home/home.component';
import { InfoEmprendimientoComponent } from './info-emprendimiento/info-emprendimiento.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'emprendimiento/:id',
    component:InfoEmprendimientoComponent 
  },
  {
    path:'registrarse',
    component:RegistrarseComponent 
  },
  {
    path:'login',
    component:LoginComponent 
  },
  {
    path:'categorias',
    component:ListaCategoriasComponent 
  },
  {
    path:'createEmprendimiento',
    component:CreateEmprendimientoComponent 
  },
  {
    path:'editEmprendimiento',
    component:EditEmprendimientoComponent 
  },
  {
    path:'createCategoria',
    component:CreateCategoriaComponent 
  },
  {
    path:'editCategoria/:id',
    component:EditCategoriaComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
