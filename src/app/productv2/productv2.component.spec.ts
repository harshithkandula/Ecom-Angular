import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productv2Component } from './productv2.component';

describe('Productv2Component', () => {
  let component: Productv2Component;
  let fixture: ComponentFixture<Productv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productv2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Productv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
