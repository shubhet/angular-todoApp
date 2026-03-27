import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mytodo } from './mytodo';

describe('Mytodo', () => {
  let component: Mytodo;
  let fixture: ComponentFixture<Mytodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mytodo],
    }).compileComponents();

    fixture = TestBed.createComponent(Mytodo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
