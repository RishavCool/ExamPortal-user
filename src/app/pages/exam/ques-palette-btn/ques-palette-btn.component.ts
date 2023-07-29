import { Component, Input } from '@angular/core';
import { ExamService } from 'src/app/service/exam.service';

@Component({
  selector: 'app-ques-palette-btn',
  templateUrl: './ques-palette-btn.component.html',
  styleUrls: ['./ques-palette-btn.component.css']
})
export class QuesPaletteBtnComponent {

  constructor(public examSrvc: ExamService) { }

  @Input() name: any | undefined;
}
