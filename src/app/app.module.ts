import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpcomingEventComponent } from './pages/upcoming-event/upcoming-event.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { ExamCommonComponent } from './pages/exam/exam-common/exam-common.component';
import { DetailComponent } from './pages/exam/detail/detail.component';
import { RulesComponent } from './pages/exam/rules/rules.component';
import { LaunchEventComponent } from './pages/exam/launch-event/launch-event.component';
import { ResponseComponent } from './pages/exam/response/response.component';
import { VerificationComponent } from './pages/exam/verification/verification.component';
import { FailedComponent } from './pages/exam/failed/failed.component';
import { ChangeBgDirective } from './change-bg.directive';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ExamComponent } from './pages/mock-test/exam/exam.component';
import { ResultComponent } from './pages/mock-test/result/result.component';
import { UpcomingEventCardComponent } from './pages/upcoming-event-card/upcoming-event-card.component';
import { PracticeCardComponent } from './pages/practice-card/practice-card.component';
import { QuesPaletteBtnComponent } from './pages/exam/ques-palette-btn/ques-palette-btn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpcomingEventComponent,
    PracticeComponent,
    ExamCommonComponent,
    DetailComponent,
    RulesComponent,
    LaunchEventComponent,
    ResponseComponent,
    VerificationComponent,
    FailedComponent,
    ChangeBgDirective,
    ExamComponent,
    ResultComponent,
    UpcomingEventCardComponent,
    PracticeCardComponent,
    QuesPaletteBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

