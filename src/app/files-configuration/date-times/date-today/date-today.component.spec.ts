import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTodayComponent } from './date-today.component';

describe('DateTodayComponent', () => {
  let component: DateTodayComponent;
  let fixture: ComponentFixture<DateTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateTodayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
