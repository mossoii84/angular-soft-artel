import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBlockMenuComponent } from './right-block-menu.component';

describe('RightBlockMenuComponent', () => {
  let component: RightBlockMenuComponent;
  let fixture: ComponentFixture<RightBlockMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightBlockMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightBlockMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
