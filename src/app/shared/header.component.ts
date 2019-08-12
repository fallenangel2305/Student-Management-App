import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { BackendService } from '../services/backend.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() pageTitle: string;

  selectedValue;
  emailSent = false;
  formShowing = false;
  configData;
  userRole = 'student';
  msgCount$;

  error: any;
  dataLoading: boolean = false;
  brokenNetwork = false;

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
    this.configData = this._backendService.getConfig();
    if (window.localStorage.getItem('role')) {
      this.userRole = window.localStorage.getItem('role');
      this.getMessageCounts();
    }
  }
  getMessageCounts() {
    this.msgCount$ = this._backendService.getUserStudentMSGCounts();
  }

  onSubmit(formData) {
    this.dataLoading = true;
    this._backendService.sendEmail(formData).subscribe(
      res => {

      },
      error => {
        console.log("API didn't respond");
        this.brokenNetwork = true;
        this.dataLoading = false;
      },
      () => {
        this.dataLoading = false;
        this.emailSent = true;
      }
    )
  }

}
