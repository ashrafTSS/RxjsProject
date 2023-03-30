import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncAwiteComponent } from './async-awite.component';

describe('AsyncAwiteComponent', () => {
  let component: AsyncAwiteComponent;
  let fixture: ComponentFixture<AsyncAwiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncAwiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncAwiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
