import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  public user;
  public form = new UntypedFormGroup({
    firstName: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new UntypedFormControl('', [Validators.required, Validators.minLength(2)]),
    username: new UntypedFormControl('', [Validators.required, Validators.minLength(2)]),
    email: new UntypedFormControl(''),
    phone: new UntypedFormControl(''),
  });
  constructor(public userService: UserService) {
    // this.getUser();
   }

  //  public async getUser() {
  //   this.userService.
  //  }

  ngOnInit() {
  }

  public async onSubmit() {
    console.log(this.form.value);
    this.user = this.form.value;
  }
  public get userName(): AbstractControl {
    return this.form.controls['userame'];
  }

  public get email(): AbstractControl {
    return this.form.controls['email'];
  }

  public get phone(): AbstractControl {
    return this.form.controls['phone'];
  }

  public get firstName(): AbstractControl {
    return this.form.controls['firstName'];
  }

  public get lastName(): AbstractControl {
    return this.form.controls['lastName'];
  }
}
