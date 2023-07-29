import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upcoming-event-card',
  templateUrl: './upcoming-event-card.component.html',
  styleUrls: ['./upcoming-event-card.component.css']
})
export class UpcomingEventCardComponent {
  
  @Input() title: string | undefined;
  @Input() date: string | undefined;
  @Input() time: string | undefined;
  @Input() registered: string | undefined;
}
