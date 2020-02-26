import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  screenHeight: number;
  screenWidth: number;

  constructor() {
    this.getScreenSize();
  }

  ngOnInit() {
  }

  getScreenSize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
}
