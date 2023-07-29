import { Component } from '@angular/core';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent {

  categories=[
    {
          cid:24,
    title:'Programmin',
    description:'This is programming',
    },
    {
          cid:25,
    title:'Hobby',
    description:'This is Hobby',
    },
    {
          cid:26,
    title:'Sports',
    description:'This is Sports',
    },
  ]

}
