import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { PracticeCardComponent } from '../practice-card/practice-card.component';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements AfterViewInit {

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  tests: any = [];

  constructor(private fetch: FetchService){
    this.getAllTests();
  }



  public getAllTests() {
    this.fetch.getAllTests().subscribe(async (res) => {
      //console.log(res);
      this.tests = await res;

      for (let i = 0; i < this.tests.length; i++) {
        this.createComponent(this.tests[i].title, this.tests[i].completed);
      }
    })
  }

  ngAfterViewInit() {

    // var x = window.screen.width / 380;

    // console.log(x);

    // for(let i=1; i<=30; i++){
    //   this.createComponent('Test '+i);
    // }
    
  }

  


  createComponent(title:string, completed:any) {
    const widgetOneRef = this.container.createComponent(PracticeCardComponent);
    widgetOneRef.setInput('title', title);
    var uiComp;

    if (completed > 1000000000000) {
      uiComp = Math.floor((completed / 1000000000000)) + 'T';
    }
    else if (completed > 1000000000) {
      uiComp = Math.floor((completed / 1000000000)) + 'B';
    }
    else if (completed > 1000000) {
      uiComp = Math.floor((completed / 1000000)) + 'M';
    }
    else if (completed > 1000) {
      uiComp = Math.floor((completed / 1000)) + 'K';
    }
    else {
      uiComp = completed;
    }

    widgetOneRef.setInput('completed', uiComp);
  }

}
