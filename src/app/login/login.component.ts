import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public respuesta:any = [];
  public username:string='';
  public password:string='';
  public form!: FormGroup;
  public logeado:boolean=false;
  public log:boolean=false;
  public emprendimiento:any;
  public usuario:any;

  constructor(private route:ActivatedRoute, private RestService:RestService,
    private formBuilder:FormBuilder, private router:Router){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    this.username=this.form.value.username;
    this.password=this.form.value.password;

    this.RestService.get('http://localhost:9000/demo/manguito/login?username='+this.username+'&password='+this.password)
    .subscribe(respuesta => {
      this.logeado=true;
      console.log('logeado');
      localStorage.setItem('usuario', JSON.stringify(respuesta));
      this.usuario = localStorage.getItem('usuario');
      this.usuario = JSON.parse(this.usuario);
      this.emprendimiento = this.usuario.emprendimiento;
      localStorage.setItem('emprendimiento', JSON.stringify(this.emprendimiento));
      this.router.navigate(['']);
    })

    if (!this.logeado)
    {
      this.log=true;
    }
  }

}
