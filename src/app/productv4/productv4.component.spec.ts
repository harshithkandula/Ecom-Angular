import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productv4Component } from './productv4.component';

describe('Productv4Component', () => {
  let component: Productv4Component;
  let fixture: ComponentFixture<Productv4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productv4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Productv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
