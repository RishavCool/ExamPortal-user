import { Component } from '@angular/core';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {
categories=[
    {
          cid:24,
    title:'Programmin',

    },
    {
          cid:25,
    title:'Hobby',

    },
    {
          cid:26,
    title:'Sports',

    },
  ]
}
