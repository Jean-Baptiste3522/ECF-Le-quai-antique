import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteListeComponent } from './carte-liste.component';

describe('CarteListeComponent', () => {
  let component: CarteListeComponent;
  let fixture: ComponentFixture<CarteListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
