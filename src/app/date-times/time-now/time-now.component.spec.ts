import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeNowComponent } from './time-now.component';

describe('TimeNowComponent', () => {
  let component: TimeNowComponent;
  let fixture: ComponentFixture<TimeNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeNowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
