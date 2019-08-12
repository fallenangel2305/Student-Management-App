import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { CustomMaterialModule } from './shared/custom.material';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/login/signup.component';
import { environment } from 'src/environments/environment';
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
import { FileUploadComponent } from './dropzone/fileupload.component';
import { DropZoneDirective } from './dropzone/dropzone.directive';
import { FileSizePipe } from './dropzone/filesize.pipe';
import { EnrollmentComponent } from './setup/enrollment/enrollment.component';
import { FeecodeComponent } from './setup/feecode/feecode.component';
import { MarkscodeComponent } from './setup/markscode/markscode.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		SignupComponent,
		AboutusComponent,
		HeaderComponent,
		FooterComponent,
		SettingsComponent,
		NotificationsComponent,
		StudentComponent,
		StudentViewComponent,
		MarksComponent,
		MarksViewComponent,
		FeeComponent,
		FeeViewComponent,
		AssignmentComponent,
		AssignmentViewComponent,
		ClassesComponent,
		ClassesViewComponent,
		HomeworkComponent,
		HomeworkViewComponent,
		TutorialsViewComponent,
		TutorialsComponent,
		FileUploadComponent,
		DropZoneDirective,
		FileSizePipe,
		EnrollmentComponent,
		FeecodeComponent,
		MarkscodeComponent,

	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CustomMaterialModule,
		AngularFireModule.initializeApp(environment.firebaseConfig, "code-online"),
		AngularFirestoreModule,
		AngularFireStorageModule,
		AngularFireAuthModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
