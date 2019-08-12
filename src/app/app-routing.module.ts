import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/login/signup.component';
import { AboutusComponent } from './shared/aboutus.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { NotificationsComponent } from './shared/settings/notifications.component';
import { StudentComponent } from './manage/student.component';
import { StudentViewComponent } from './manage/student-view.component';
import { MarksComponent } from './manage/marks.component';
import { MarksViewComponent } from './manage/marks-view.component';
import { FeeComponent } from './manage/fee.component';
import { FeeViewComponent } from './manage/fee-view.component';
import { AssignmentComponent } from './course/assignment.component';
import { AssignmentViewComponent } from './course/assignment-view.component';
import { ClassesComponent } from './course/classes.component';
import { ClassesViewComponent } from './course/classes-view.component';
import { HomeworkComponent } from './course/homework.component';
import { HomeworkViewComponent } from './course/homework-view.component';
import { TutorialsViewComponent } from './course/tutorials-view.component';
import { TutorialsComponent } from './course/tutorials.component';
import { EnrollmentComponent } from './setup/enrollment/enrollment.component';
import { FeecodeComponent } from './setup/feecode/feecode.component';
import { MarkscodeComponent } from './setup/markscode/markscode.component';

import { AuthGuardService } from './services/auth-guard.service';
import { NavAuthGuardService } from './services/nav-auth-guard.service';

const routes: Routes = [
  { path: '', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuardService] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuardService] },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'student-view', component: StudentViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'fee', component: FeeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'fee-view', component: FeeViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'fee/:id', component: FeeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'marks', component: MarksComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'marks-view', component: MarksViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'marks/:id', component: MarksComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'assignments', component: AssignmentComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'assignments-view', component: AssignmentViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'homework', component: HomeworkComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'homework-view', component: HomeworkViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'tutorials', component: TutorialsComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'tutorials-view', component: TutorialsViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'classes', component: ClassesComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'classes-view', component: ClassesViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'enrollment', component: EnrollmentComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'feecode', component: FeecodeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
  { path: 'markscode', component: MarkscodeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },

  { path: '**', redirectTo: 'aboutus', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
