import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouterService} from '../../services/router/router.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  constructor(public router: RouterService) { }

  ngOnInit() {
  }
}
