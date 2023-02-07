import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-emprendimiento',
  templateUrl: './create-emprendimiento.component.html',
  styleUrls: ['./create-emprendimiento.component.css']
})
export class CreateEmprendimientoComponent implements OnInit{
  public respuesta:any = [];
  public form!: FormGroup;
  public usuario:any;
  public id: string ='';
  public invalido:boolean=false;

  constructor(private route:ActivatedRoute, private RestService:RestService,
    private formBuilder:FormBuilder, private router:Router){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dominio: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  crear(){
    this.usuario = localStorage.getItem('usuario');
    this.usuario = JSON.parse(this.usuario);
    this.id = this.usuario.id;
    this.create(this.id);
  }

  create(id:string){
  
    if (this.form.invalid) {
      this.invalido = true;
      return;
    }

    this.RestService.post('http://localhost:8080/demo/manguito/createEmprendimiento/'+id,
    {
      dominio: this.form.value.dominio,
      password: this.form.value.password
    })
    .subscribe(respuesta => {
      console.log('Emprendimiento creado!!!');
      localStorage.setItem('emprendimiento', JSON.stringify(respuesta));
      this.router.navigate(['']);
    })
  }
}
