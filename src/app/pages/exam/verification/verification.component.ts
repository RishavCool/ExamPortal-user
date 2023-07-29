import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

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

  canvas = document.querySelector("#canvas")


  ngAfterViewInit() {
    this.initVideo();
  }

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

    const video_constraints = this.constraints;
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

  LaunchExam() {
    this.stopBothVideoAndAudio(this.stream);
    this._router.navigateByUrl('exam/launch');
  }

  // ClickPhoto() {

  //   this.canvas.getContext('2d').drawImage(video, 0, 0, this.canvas.width, canvas.height);
  //   let image_data_url = this.canvas.toDataURL('image/jpeg');

  //   // data url of the image
  //   console.log(image_data_url);

  // }


  stopBothVideoAndAudio(stream: any) {
    stream.getTracks().forEach(function (track: any) {
      if (track.readyState == 'live') {
        track.stop();
      }
    });
  }
}
