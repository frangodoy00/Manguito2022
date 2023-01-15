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

  constructor(private route:ActivatedRoute, private RestService:RestService,
    private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  registro(){
    this.RestService.post('http://localhost:9000/demo/manguito/registrarUsuario',
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
}
