import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroListarComponent } from './carro-listar.component';


describe('CarroListarComponent', () => {
  let component: CarroListarComponent;
  let fixture: ComponentFixture<CarroListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
