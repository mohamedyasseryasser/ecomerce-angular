import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsadminComponent } from './cartsadmin.component';

describe('CartsadminComponent', () => {
  let component: CartsadminComponent;
  let fixture: ComponentFixture<CartsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartsadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
