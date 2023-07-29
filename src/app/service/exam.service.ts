import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  quesNo : any;
  totalQues : any;

  constructor() { 
    this.quesNo = 1; 
    this.totalQues = 1;

  }

  setTotalQues(totalQues: Number){
    this.totalQues = totalQues;
  }

  
  setQuesNo(quesNo: Number){
    this.quesNo = quesNo;
  }

  prevQues(){
    if(this.quesNo!=1){
      this.quesNo--;
    }
  }

  nextQues(){
    if(this.quesNo!=this.totalQues){
      this.quesNo++;
    }
  }
}
