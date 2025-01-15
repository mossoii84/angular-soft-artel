import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAuthorComponent } from './task-author.component';

describe('TaskAuthorComponent', () => {
  let component: TaskAuthorComponent;
  let fixture: ComponentFixture<TaskAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskAuthorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
