import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { GramasTransformPipe } from '../gramas-transform.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent, GramasTransformPipe], imports: [AppRoutingModule], schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title Detalhes do usuário', () => {
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Detalhes do usuário:');
  });
});
