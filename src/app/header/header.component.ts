import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public usuario:any;
  public rol:any;
  public emprendimiento:any;

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario');
    this.usuario = JSON.parse(this.usuario);
    this.rol = this.usuario.rol.rol;
    this.emprendimiento = localStorage.getItem('emprendimiento');
    this.emprendimiento = JSON.parse(this.usuario);
  }

  cerrarSesion(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('emprendimiento');
    this.router.navigate(['login']);
  }

}
