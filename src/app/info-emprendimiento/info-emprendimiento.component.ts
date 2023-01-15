import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-info-emprendimiento',
  templateUrl: './info-emprendimiento.component.html',
  styleUrls: ['./info-emprendimiento.component.css']
})
export class InfoEmprendimientoComponent implements OnInit {

  public id:any;
  public respuesta:any;
  public redes:any = [];
  public categorias:any = [];

  constructor(private route:ActivatedRoute, private RestService:RestService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap
      console.log('Parametro:',params.id);
      this.cargarData(params.id);
    })
  }

  cargarData(id:string){
    this.RestService.get('http://localhost:9000/demo/manguito/getEmprendimiento/'+id)
    .subscribe(respuesta => {
        this.respuesta = respuesta;
        this.redes = this.respuesta.redesSociales;
        this.categorias = this.respuesta.categorias;
    })
  }

}
