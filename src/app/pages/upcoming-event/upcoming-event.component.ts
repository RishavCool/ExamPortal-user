import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { UpcomingEventCardComponent } from '../upcoming-event-card/upcoming-event-card.component';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.css']
})
export class UpcomingEventComponent implements OnInit, AfterViewInit {


  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  exams: any = [];

  constructor(private fetch: FetchService) {
    this.getAllExams();
  }

  public getAllExams() {
    this.fetch.getAllExams().subscribe(async (res) => {
      console.log(res);
      this.exams = await res;

      for (let i = 0; i < this.exams.length; i++) {
        this.createComponent(this.exams[i].title, this.exams[i].eventDate, this.exams[i].eventTime, this.exams[i].registered);
      }
    })
  }

  ngOnInit() {
    // const exams = this.fetch.getAllExams();
    // console.log(exams);
    //  for(let exam in exams){

    //  }
  }

  ngAfterViewInit() {

    // var x = window.screen.width / 380;

    // console.log(this.exams.length);





    // for(let i=1; i<=30; i++){
    //   this.createComponent('Upcoming Event '+i);
    // }

  }




  createComponent(title: string, date: string, time: string, registered: any) {
    const widgetOneRef = this.container.createComponent(UpcomingEventCardComponent);
    widgetOneRef.setInput('title', title);
    widgetOneRef.setInput('date', date);
    widgetOneRef.setInput('time', time);

    var uiReg;

    if (registered > 1000000000000) {
      uiReg = Math.floor((registered / 1000000000000)) + 'T';
    }
    else if (registered > 1000000000) {
      uiReg = Math.floor((registered / 1000000000)) + 'B';
    }
    else if (registered > 1000000) {
      uiReg = Math.floor((registered / 1000000)) + 'M';
    }
    else if (registered > 1000) {
      uiReg = Math.floor((registered / 1000)) + 'K';
    }
    else {
      uiReg = registered;
    }

    widgetOneRef.setInput('registered', uiReg);
  }





}
