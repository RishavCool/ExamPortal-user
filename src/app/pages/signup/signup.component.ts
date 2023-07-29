import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(
    private user: UserService,
    private router: Router
    ){}

  ngOnInit(): void {  }


  firstName :  any;
  lastName :  any;
  username :  any;
  password :  any;  
  email :  any;
  mobile :  any;
  TnC :  any;

  SignupSubmit(event: { preventDefault: () => void; target: any; }) {

    event.preventDefault()
    const target = event.target
    this.firstName = target.querySelector('#firstName').value
    this.lastName = target.querySelector('#lastName').value
    this.username = target.querySelector('#username').value
    this.email = target.querySelector('#email').value
    this.password = target.querySelector('#password').value
    this.mobile = target.querySelector('#mobile').value
    this.TnC = target.querySelector('#TnC').checked


    if (this.firstName  == '' ) {
      alert ("Enter First Name !!");
      return;
    }
    else if (this.lastName  == '' ) {
      alert ("Enter Last Name !!");
      return;
    } 
    else if (this.username  == '' ) {
      alert ("Enter Username !!");
      return;
    } 
    else if (this.email  == '' ) {
      alert ("Enter Email !!");
      return;
    } 
    else if (this.password  == '' ) {
      alert ("Enter Password !!");
      return;
    }     
    else if (this.mobile  == '' ) {
      alert ("Enter Mobile No. !!");
      return;
    } 
    else if(this.TnC == false ){
      alert ("Agree terms and conditions to Signup !!");
      // console.log(this.TnC);
      return;
    }
    
    this.SendData();

    
    
  }

  SendData(){

    const Data = {
      firstName: this.firstName,
      lastName : this.lastName,
      username : this.username,
      email : this.email,
      password : this.password,
      mobile : this.mobile
    };

    console.log(Data);

    this.user.createUser(Data).subscribe(data => {
      if(data.success) {
        // this.router.navigate(['admin'])
        // this.Auth.setLoggedIn(true)
        console.log("SignUp Sucessfully !!");
      } else {
        //window.alert(data.message)
      }
    });
    
    alert('Signup sucessfully');

    this.router.navigate(['']);

    
    //this.Auth.sendDataToBackendTest();
    
  }

  Reset(){
    this.firstName  = '';
    this.lastName  = '';
    this.username  = '';
    this.password  = '';
    this.email  = '';
    this.mobile  = '';
    this.username = false;
  }
}
