import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlistv4Component } from './productlistv4.component';

describe('Productlistv4Component', () => {
  let component: Productlistv4Component;
  let fixture: ComponentFixture<Productlistv4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productlistv4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Productlistv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
