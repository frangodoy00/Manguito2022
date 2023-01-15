import { Component, Input, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @Input() dataEntrante:any;
  
  public id:any;
  public respuesta:any;

  constructor(private router:Router, private RestService:RestService) {}

  ngOnInit(): void {
  }

  eliminar(id:string){
    console.log(id);
    this.RestService.delete('http://localhost:9000/demo/manguito/deleteCategoria/'+id)
    .subscribe(respuesta => {
        this.respuesta = respuesta;
    })
    this.router.navigate(['categorias']);
  }
}
