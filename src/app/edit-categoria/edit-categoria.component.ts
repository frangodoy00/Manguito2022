import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit{
  public respuesta:any = [];
  public form!: FormGroup;
  public id:any;
  
  constructor(private router:Router, private route:ActivatedRoute, private RestService:RestService,
    private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]]
    })
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap
      console.log('Parametro:',params.id);
      this.id = params.id;
    })
  }

  edit(){

    if (this.form.invalid) {
      return;
    }

    this.RestService.put('http://localhost:8080/demo/manguito/categoria/'+this.id,
    {
      nombre: this.form.value.nombre
    })
    .subscribe(respuesta => {
      this.respuesta = respuesta;
  })
  this.router.navigate(['categorias']);
  }
}
