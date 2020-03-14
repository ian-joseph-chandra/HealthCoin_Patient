import {Component, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(public router: RouterService) {
  }

  ngOnInit() {
  }
}
