import {Component, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  records: any = Array(10).fill(0);

  constructor(public router: RouterService) {
  }

  ngOnInit() {
  }
}
