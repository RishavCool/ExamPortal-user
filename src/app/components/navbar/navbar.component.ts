import { Component, Directive, HostListener, HostBinding } from "@angular/core";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public user: UserService) { }

  navbarfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    }
    else {
      this.navbarfixed = false;
    }
  }

}
@Directive({
  selector: '[appdropdown]'
})
export class DropdownDirective {
  @HostBinding('class.Open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}