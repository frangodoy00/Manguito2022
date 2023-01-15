import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEmprendimientoComponent } from './info-emprendimiento.component';

describe('InfoEmprendimientoComponent', () => {
  let component: InfoEmprendimientoComponent;
  let fixture: ComponentFixture<InfoEmprendimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEmprendimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoEmprendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
