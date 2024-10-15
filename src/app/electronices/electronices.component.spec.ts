import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicesComponent } from './electronices.component';

describe('ElectronicesComponent', () => {
  let component: ElectronicesComponent;
  let fixture: ComponentFixture<ElectronicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectronicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectronicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
