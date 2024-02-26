import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPermissionToWriteBlogComponent } from './check-permission-to-write-blog.component';

describe('CheckPermissionToWriteBlogComponent', () => {
  let component: CheckPermissionToWriteBlogComponent;
  let fixture: ComponentFixture<CheckPermissionToWriteBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckPermissionToWriteBlogComponent]
    });
    fixture = TestBed.createComponent(CheckPermissionToWriteBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
