import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmprendimientoComponent } from './create-emprendimiento.component';

describe('CreateEmprendimientoComponent', () => {
  let component: CreateEmprendimientoComponent;
  let fixture: ComponentFixture<CreateEmprendimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmprendimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmprendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
