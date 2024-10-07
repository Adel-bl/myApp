import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfilePagePage } from './user-profile-page.page';

describe('UserProfilePagePage', () => {
  let component: UserProfilePagePage;
  let fixture: ComponentFixture<UserProfilePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
