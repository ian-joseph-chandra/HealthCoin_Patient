import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
  }


  async goToHomePage() {
    await this.router.navigate(['home']);
  }

  async goToRecordListPage(){
    await this.router.navigate(['record-list']);
  }
}
