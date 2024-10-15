import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenscolthesComponent } from './menscolthes.component';

describe('MenscolthesComponent', () => {
  let component: MenscolthesComponent;
  let fixture: ComponentFixture<MenscolthesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenscolthesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenscolthesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
