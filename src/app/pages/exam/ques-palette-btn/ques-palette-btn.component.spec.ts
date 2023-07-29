import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesPaletteBtnComponent } from './ques-palette-btn.component';

describe('QuesPaletteBtnComponent', () => {
  let component: QuesPaletteBtnComponent;
  let fixture: ComponentFixture<QuesPaletteBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesPaletteBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuesPaletteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
