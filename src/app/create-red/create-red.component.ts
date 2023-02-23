import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-red',
  templateUrl: './create-red.component.html',
  styleUrls: ['./create-red.component.css']
})
export class CreateRedComponent {
  public creado:boolean=false;
  public respuesta:any = [];
  public form!: FormGroup;
  public usuario:any;
  public id: string ='';
  public invalido:boolean=false;
  public emprendimiento: any;

  constructor(private route:ActivatedRoute, private RestService:RestService,
    private formBuilder:FormBuilder, private router:Router){}

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        url: ['', [Validators.required]]
      })
    }

  crear(){
    this.usuario = localStorage.getItem('usuario');
    this.emprendimiento = localStorage.getItem('emprendimiento');
    this.usuario = JSON.parse(this.usuario);
    this.emprendimiento = JSON.parse(this.emprendimiento);
    this.id = this.usuario.id;
    this.create(this.id,this.emprendimiento);
  }

  create(id:string, emprendimientoStorage:any){
  
    if (this.form.invalid) {
      this.invalido = true;
      return;
    }

    this.RestService.post('http://localhost:8080/demo/manguito/createRedSocial',
    {
      nombre: this.form.value.nombre,
      url: this.form.value.url,
      emprendimiento: emprendimientoStorage
    })
    .subscribe(respuesta => {
      console.log('red social creada!!!');
      this.form.reset();
      this.creado=true;
    })
  }
}
