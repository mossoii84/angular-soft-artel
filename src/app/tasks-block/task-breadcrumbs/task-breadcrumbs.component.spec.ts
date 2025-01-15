import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBreadcrumbsComponent } from './task-breadcrumbs.component';

describe('TaskBreadcrumbsComponent', () => {
  let component: TaskBreadcrumbsComponent;
  let fixture: ComponentFixture<TaskBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskBreadcrumbsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
