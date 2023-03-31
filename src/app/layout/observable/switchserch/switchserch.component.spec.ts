import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchserchComponent } from './switchserch.component';

describe('SwitchserchComponent', () => {
  let component: SwitchserchComponent;
  let fixture: ComponentFixture<SwitchserchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchserchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchserchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
