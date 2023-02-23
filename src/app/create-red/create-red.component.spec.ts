import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRedComponent } from './create-red.component';

describe('CreateRedComponent', () => {
  let component: CreateRedComponent;
  let fixture: ComponentFixture<CreateRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
