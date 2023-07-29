
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-practice-card',
  templateUrl: './practice-card.component.html',
  styleUrls: ['./practice-card.component.css'],
})
export class PracticeCardComponent {

  @Input() title: string | undefined;
  @Input() completed: string | undefined;
}
