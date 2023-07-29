import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventCardComponent } from './upcoming-event-card.component';

describe('UpcomingEventCardComponent', () => {
  let component: UpcomingEventCardComponent;
  let fixture: ComponentFixture<UpcomingEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingEventCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
