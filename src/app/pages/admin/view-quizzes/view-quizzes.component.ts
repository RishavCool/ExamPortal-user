import { Component } from '@angular/core';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent {

  quizzes=[
    {
      qId:23,
      title:'Basic JAVA Qiuz',
      description:'This is JAVA QUIZ',
      maxMarks:'50',
      numberOfQuestions:'20',
      active:'yes',
      category:{
        title:'Programming',
      }
    },
        {
      qId:28,
      title:'Basic C Qiuz',
      description:'This is C QUIZ',
      maxMarks:'50',
      numberOfQuestions:'25',
      active:'yes',
      category:{
        title:'Programming',
      }
    },
  ]

}
