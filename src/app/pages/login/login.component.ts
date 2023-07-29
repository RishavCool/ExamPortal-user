import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
//import { hash } from 'bcrypt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private user: UserService,
    private router: Router,

  ) { }

  LoginData = {
    username: "",
    password: ""
  }

  LoginSubmit(event: { preventDefault: () => void; target: any; }) {

    event.preventDefault()
    const target = event.target

    this.LoginData.username = target.querySelector('#username').value
    this.LoginData.password = target.querySelector('#password').value

    if (this.LoginData.username == '' && this.LoginData.password == '') {
      alert("Enter Username and Password !!");
      return;
    }
    else if (this.LoginData.username == '') {
      alert("Enter Username !!");
      return;
    }
    else if (this.LoginData.password == '') {
      alert("Enter Password !!");
      return;
    }

    // console.log("Login Sucessfully !!");


    this.SendData();



  }

  async SendData() {

    const Data = {
      username: this.LoginData.username,
      password: this.LoginData.password

    };

    console.log(Data);

    this.user.loginUser(Data).subscribe((data) => {
      
      console.log(data.length);
      console.log(data[0].firstName);
      // const _data = JSON.parse( data);
      // console.log(_data);
      // console.log(_data.success);
      console.log(data);
      // if (data[0].status == 'success') {

        // this.router.navigate(['admin'])
        // this.Auth.setLoggedIn(true)
        this.user.isLogined = true;
        this.user.firstName = data[0].firstName;
        this.user.nameInitial = data[0].firstName[0];

        alert('Login sucessfully');
        this.router.navigate(['']);
        console.log("Login Sucessfully !!");
      // } else {
      //   //window.alert(data.message)
      // }
    });

   


    //this.Auth.sendDataToBackendTest();

  }
}
