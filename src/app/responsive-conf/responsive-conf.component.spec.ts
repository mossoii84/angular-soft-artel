import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveConfComponent } from './responsive-conf.component';

describe('ResponsiveConfComponent', () => {
  let component: ResponsiveConfComponent;
  let fixture: ComponentFixture<ResponsiveConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveConfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
