import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCommonComponent } from './exam-common.component';

describe('ExamCommonComponent', () => {
  let component: ExamCommonComponent;
  let fixture: ComponentFixture<ExamCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
