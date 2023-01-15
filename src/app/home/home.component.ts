import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public emprendimientos:any = []

  constructor(private RestService:RestService){

  }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('http://localhost:9000/demo/manguito/getListaEmprendimientos')
    .subscribe(respuesta => {
      this.emprendimientos = respuesta;
    })
  }
}
