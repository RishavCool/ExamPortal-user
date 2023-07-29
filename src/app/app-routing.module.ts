import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
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
import { ExamComponent } from './pages/mock-test/exam/exam.component';
import { ResultComponent } from './pages/mock-test/result/result.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },

  {
    path:'upcoming-event',
    component:UpcomingEventComponent,
    pathMatch:'full'
  },

  {
    path:'practice',
    component:PracticeComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'exam',
    //component:ExamCommonComponent,
    children:[
      {
        path:'',
        component:DetailComponent
      },
      {
        path:'rules',
        component:RulesComponent
      },
      {
        path:'verification',
        component:VerificationComponent
      },
      {
        path:'launch',
        component:LaunchEventComponent
      },
      {
        path:'response',
        component:ResponseComponent
      },
      {
        path:'failed',
        component:FailedComponent
      },
      
    ]
  },
  {
    path:'mock-test',
    //component:ExamCommonComponent,
    children:[
      {
        path:'',
        component:ExamComponent
      },
      {
        path:'result',
        component:ResultComponent
      },      
    ]
  },
  {
    path:'admin',
    component:AdminDashboardComponent,
    //canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'categories',
        component:ViewCategoriesComponent,
      },
      {
        path:'add-category',
        component:AddCategoriesComponent,
      },
      {
        path:'quizzes',
        component:ViewQuizzesComponent,
      },
      {
        path:'add-quiz',
        component:AddQuizComponent,
      },
    ],


  },
  {
    path:'user',
    component:UserDashboardComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
