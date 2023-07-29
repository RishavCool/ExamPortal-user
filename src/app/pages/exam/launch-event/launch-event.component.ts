import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { NavbarService } from 'src/app/service/navbar.service';
import { QuestionService } from 'src/app/service/question.service';
import { QuesPaletteBtnComponent } from '../ques-palette-btn/ques-palette-btn.component';
import { ExamService } from 'src/app/service/exam.service';

@Component({
  selector: 'app-launch-event',
  templateUrl: './launch-event.component.html',
  styleUrls: ['./launch-event.component.css']
})
export class LaunchEventComponent implements OnInit, AfterViewInit {

  public name: string = "";
  public questionList: any;
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _router: Router,
    private questionService: QuestionService,
    private nav: NavbarService,
    public examSrvc: ExamService
  ) { 
    this.getAllQuestions();
  }

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;



  ngAfterViewInit() {

    this.initVideo();

    //console.log(this.questionList);

    for (let i = 1; i <= this.questionList.length; i++) {
      this.createComponent('' + i);
    }

  }




  createComponent(title: string) {
    const widgetOneRef = this.container.createComponent(QuesPaletteBtnComponent);
    widgetOneRef.setInput('name', title);
  }

  elem: any;

  isFullscreenResult: boolean = false;
  privateIsFullscreenResult: boolean = false;



  ngOnInit() {
    this.elem = document.documentElement;

    document.onfullscreenchange = () => {
      this.isFullscreenResult = this.checkFullScreeen();
      console.log(this.checkFullScreeen())
      if (this.privateIsFullscreenResult != this.isFullscreenResult) {
        this.cancelExam();
      }
    }

    this.openFullscreen();
    this.nav.hide();

    this.name = localStorage.getItem("name")!;
    
    this.startCounter();
  }

  



  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
      })
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any) {

    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);


    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

      this.points -= 10;
    }
  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
          this.points -= 10;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";

  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

  }

  cancelExam() {
    this.stopBothVideoAndAudio(this.stream);
    this.nav.show();
    this._router.navigateByUrl('/exam/failed');

  }

  checkFullScreeen(): boolean {
    return !!(this.document.fullscreenElement || this.document.mozFullScreenElement || this.document.webkitFullscreenElement || this.document.msFullscreenElement);
  }

  openFullscreen() {

    this.privateIsFullscreenResult = true;

    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {

    this.privateIsFullscreenResult = false;

    if (this.checkFullScreeen()) {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  @ViewChild("video")
  video!: ElementRef;

  streaming = false;
  error: any;
  private stream: MediaStream | undefined;
  private constraints = {
    audio: true,
    video: true,
  };





  initVideo() {
    this.getMediaStream()
      .then((stream) => {
        this.stream = stream;
        this.streaming = true;
      })
      .catch((err) => {
        this.streaming = false;
        this.error = err.message + " (" + err.name + ":" + err.constraintName + ")";
      });
  }
  private getMediaStream(): Promise<MediaStream> {

    const video_constraints = this.constraints; //{ video: true };
    const _video = this.video.nativeElement;
    return new Promise<MediaStream>((resolve, reject) => {
      // (get the stream)
      return navigator.mediaDevices.
        getUserMedia(video_constraints)
        .then(stream => {
          (<any>window).stream = stream; // make variable available to browser console
          _video.srcObject = stream;
          // _video.src = window.URL.createObjectURL(stream);
          _video.onloadedmetadata = function (e: any) { };
          _video.muted = true;
          _video.play();
          return resolve(stream);
        })
        .catch(err => reject(err));
    });
  }

  FinalSubmit() {
    this.closeFullscreen();
    this.stopBothVideoAndAudio(this.stream);
    this.nav.show();
    this._router.navigateByUrl('exam/response');

  }

  stopBothVideoAndAudio(stream: any) {
    stream.getTracks().forEach(function (track: any) {
      if (track.readyState == 'live') {
        track.stop();
      }
    });
  }
}
