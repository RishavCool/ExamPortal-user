import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {

  constructor(private _router: Router) {}

  SubmitFeedback(){
    this._router.navigateByUrl('');
  }
}
