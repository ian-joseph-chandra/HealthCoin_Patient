import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToDashboard() {
    this.router.navigate(['dashboard']);
  }

  goToRecordList() {
    this.router.navigate(['record-list']);
  }
}
