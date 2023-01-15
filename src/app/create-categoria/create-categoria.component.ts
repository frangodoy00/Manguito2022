import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit{
  public respuesta:any = [];
  public form!: FormGroup;
  public creado:boolean=false;

  constructor(private route:ActivatedRoute, private RestService:RestService,
    private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required]
    })
  }

  create(){
    this.RestService.post('http://localhost:9000/demo/manguito/createCategoria',
    {
      nombre: this.form.value.nombre
    })
    .subscribe(respuesta => {
      console.log('Categoria creada!!!');
      this.form.reset();
      this.creado=true;
    })
  }
}
