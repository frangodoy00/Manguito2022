import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmprendimientoComponent } from './emprendimiento/emprendimiento.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoEmprendimientoComponent } from './info-emprendimiento/info-emprendimiento.component';
import { HomeComponent } from './home/home.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { CreateEmprendimientoComponent } from './create-emprendimiento/create-emprendimiento.component';
import { EditEmprendimientoComponent } from './edit-emprendimiento/edit-emprendimiento.component';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRedComponent } from './create-red/create-red.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmprendimientoComponent,
    InfoEmprendimientoComponent,
    HomeComponent,
    RegistrarseComponent,
    LoginComponent,
    ListaCategoriasComponent,
    CategoriaComponent,
    EditCategoriaComponent,
    CreateEmprendimientoComponent,
    EditEmprendimientoComponent,
    CreateCategoriaComponent,
    CreateRedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
