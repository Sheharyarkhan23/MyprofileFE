import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperieneComponent } from './experiene.component';

describe('ExperieneComponent', () => {
  let component: ExperieneComponent;
  let fixture: ComponentFixture<ExperieneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperieneComponent]
    });
    fixture = TestBed.createComponent(ExperieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
