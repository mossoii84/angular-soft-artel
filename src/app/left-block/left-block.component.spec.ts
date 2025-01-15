import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBlockComponent } from './left-block.component';

describe('LeftBlockComponent', () => {
  let component: LeftBlockComponent;
  let fixture: ComponentFixture<LeftBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
