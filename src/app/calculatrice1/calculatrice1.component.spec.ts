import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculatrice1Component } from './calculatrice1.component';

describe('Calculatrice1Component', () => {
  let component: Calculatrice1Component;
  let fixture: ComponentFixture<Calculatrice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculatrice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculatrice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
