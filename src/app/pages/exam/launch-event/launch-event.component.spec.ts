import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchEventComponent } from './launch-event.component';

describe('LaunchEventComponent', () => {
  let component: LaunchEventComponent;
  let fixture: ComponentFixture<LaunchEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
