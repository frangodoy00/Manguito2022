import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emprendimiento',
  templateUrl: './emprendimiento.component.html',
  styleUrls: ['./emprendimiento.component.css']
})
export class EmprendimientoComponent implements OnInit {
  @Input() dataEntrante:any;

  constructor() {}

  ngOnInit(): void {  
  }
}
