import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  screenHeight: number;
  screenWidth: number;

  constructor() {
    this.getScreenSize();
  }

  ngOnInit() {
  }

  getScreenSize(){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
}
