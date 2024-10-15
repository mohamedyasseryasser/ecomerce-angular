import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanclothesComponent } from './womanclothes.component';

describe('WomanclothesComponent', () => {
  let component: WomanclothesComponent;
  let fixture: ComponentFixture<WomanclothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomanclothesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomanclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
