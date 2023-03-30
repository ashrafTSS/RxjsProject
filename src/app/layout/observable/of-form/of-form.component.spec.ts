import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfFormComponent } from './of-form.component';

describe('OfFormComponent', () => {
  let component: OfFormComponent;
  let fixture: ComponentFixture<OfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
