import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit{

  public categorias:any = []

  constructor(private RestService:RestService){

  }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('http://localhost:8080/demo/manguito/getListaCategorias')
    .subscribe(respuesta => {
      this.categorias = respuesta;
    })
  }

}
