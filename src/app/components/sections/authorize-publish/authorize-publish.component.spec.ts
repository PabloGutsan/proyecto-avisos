import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizePublishComponent } from './authorize-publish.component';

describe('AuthorizePublishComponent', () => {
  let component: AuthorizePublishComponent;
  let fixture: ComponentFixture<AuthorizePublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizePublishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizePublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
