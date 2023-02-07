import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit{
  public respuesta:any = [];
  public form!: FormGroup;
  public registrado:boolean=false;
  public submitted=false;
  public invalido:boolean=false;


  constructor(private route:ActivatedRoute, private RestService:RestService,
    private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }


  onSubmit(): void {
  }

  registro(){

    if (this.form.invalid) {
      this.invalido = true;
      return;
    }
    this.RestService.post('http://localhost:8080/demo/manguito/registrarUsuario',
    {
      username: this.form.value.username,
      password: this.form.value.password
    })
    .subscribe(respuesta => {
      console.log('Usuario registrado!!!');
      this.form.reset();
      this.registrado=true;
    })
  }

  get f() { return this.form.controls; }
}
