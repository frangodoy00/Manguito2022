import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-edit-emprendimiento',
  templateUrl: './edit-emprendimiento.component.html',
  styleUrls: ['./edit-emprendimiento.component.css']
})
export class EditEmprendimientoComponent implements OnInit {

  public respuesta:any = [];
  public form!: FormGroup;
  public idUsuario:string='';
  public idEmprendimiento:string='';
  public usuario:any;
  public emprendimiento:any;
  public dominio:string='';

  constructor(private router:Router, private route:ActivatedRoute, private RestService:RestService,
    private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
      descripcion: ['', Validators.required],
      precioPorManguito: ['', Validators.required],
    })
  }

  edit(){
    this.usuario = localStorage.getItem('usuario');
    this.usuario = JSON.parse(this.usuario);
    this.idUsuario = this.usuario.id;
    this.emprendimiento = localStorage.getItem('emprendimiento');
    this.emprendimiento = JSON.parse(this.emprendimiento);
    this.idEmprendimiento = this.emprendimiento.id;
    this.dominio = this.emprendimiento.dominio;

    this.RestService.put('http://localhost:9000/demo/manguito/emprendimiento/'+this.idEmprendimiento+'/'+this.idUsuario,
    {
      dominio: this.dominio,
      nombre: this.form.value.nombre,
      password: this.form.value.password,
      descripcion: this.form.value.descripcion,
      precioPorManguito: this.form.value.precioPorManguito
    })
    .subscribe(respuesta => {
      localStorage.setItem('emprendimiento', JSON.stringify(respuesta));
  })
  this.router.navigate(['']);
  }

}
