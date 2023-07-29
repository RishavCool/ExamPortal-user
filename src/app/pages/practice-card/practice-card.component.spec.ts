import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeCardComponent } from './practice-card.component';

describe('PracticeCardComponent', () => {
  let component: PracticeCardComponent;
  let fixture: ComponentFixture<PracticeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
