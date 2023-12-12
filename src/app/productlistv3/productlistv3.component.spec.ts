import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlistv3Component } from './productlistv3.component';

describe('Productlistv3Component', () => {
  let component: Productlistv3Component;
  let fixture: ComponentFixture<Productlistv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productlistv3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Productlistv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
