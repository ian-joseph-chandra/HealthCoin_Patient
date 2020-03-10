import {Component, HostListener, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: RouterService) {
  }

  ngOnInit() {
  }
}
