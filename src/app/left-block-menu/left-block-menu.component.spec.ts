import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBlockMenuComponent } from './left-block-menu.component';

describe('LeftBlockMenuComponent', () => {
  let component: LeftBlockMenuComponent;
  let fixture: ComponentFixture<LeftBlockMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftBlockMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftBlockMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
