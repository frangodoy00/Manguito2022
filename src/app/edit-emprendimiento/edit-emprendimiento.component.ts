import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

type Categorias = Array<{nombre: string }>;

@Component({
  selector: 'app-edit-emprendimiento',
  templateUrl: './edit-emprendimiento.component.html',
  styleUrls: ['./edit-emprendimiento.component.css']
})
export class EditEmprendimientoComponent implements OnInit {

  Categorias: Categorias = [
    {nombre: "ropa" },
    {nombre: "comida" },
    {nombre: "deportes" }
  ];

  public respuesta:any = [];
  public respuesta2:any = [];
  public form!: FormGroup;
  public idUsuario:string='';
  public idEmprendimiento:string='';
  public usuario:any;
  public emprendimiento:any;
  public dominio:string='';
  public invalido:boolean=false;

  public redes:any = [];
  public categorias:any = [];
  public seleccionados:Categorias[]=[];
  public id:any;

  public emprendimientoId:any;

  constructor(private router:Router, private route:ActivatedRoute, private RestService:RestService,
    private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dominio: ['', [Validators.required]],
      password: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precioPorManguito: ['', [Validators.required]],
    })

    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap
      console.log('Parametro:',params.id);
      this.cargarData(params.id);
    })
  }

  edit(){

    if (this.form.invalid) {
      this.invalido = true;
      return;
    }

    this.usuario = localStorage.getItem('usuario');
    this.usuario = JSON.parse(this.usuario);
    this.idUsuario = this.usuario.id;
    this.emprendimiento = localStorage.getItem('emprendimiento');
    this.emprendimiento = JSON.parse(this.emprendimiento);
    this.idEmprendimiento = this.emprendimiento.id;
    this.dominio = this.emprendimiento.dominio;

    this.RestService.put('http://localhost:8080/demo/manguito/emprendimiento/'+this.idEmprendimiento+'/'+this.idUsuario,
    {
      dominio: this.form.value.dominio,
      password: this.form.value.password,
      descripcion: this.form.value.descripcion,
      precioPorManguito: this.form.value.precioPorManguito,
      categorias: this.seleccionados
    }
    )
    .subscribe(respuesta => {
      localStorage.setItem('emprendimiento', JSON.stringify(respuesta));
  })
  this.router.navigate(['']);
  }

  cargarData(id:string){

    this.emprendimiento = localStorage.getItem('emprendimiento');
    this.emprendimiento = JSON.parse(this.emprendimiento);
    this.RestService.get('http://localhost:8080/demo/manguito/getEmprendimiento/'+this.emprendimiento.id)
    .subscribe(respuesta => {
        this.respuesta = respuesta;
        this.redes = this.respuesta.redesSociales;
        
    })

    this.RestService.get('http://localhost:8080/demo/manguito/getListaCategorias')
    .subscribe(respuesta2 => {
      this.respuesta2 = respuesta2;
      this.categorias = this.respuesta2.categorias;
    })
  }

  eliminar(){
    this.emprendimiento = localStorage.getItem('emprendimiento');
    this.emprendimiento = JSON.parse(this.emprendimiento);   
    this.emprendimientoId = this.emprendimiento.id;
    this.RestService.delete('http://localhost:8080/demo/manguito/deleteRedSocial/'+this.emprendimientoId)

  }
}
