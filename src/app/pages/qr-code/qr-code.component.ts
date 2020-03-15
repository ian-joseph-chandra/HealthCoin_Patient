import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../services/router/router.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {

  constructor(public router: RouterService) { }

  ngOnInit(): void {
  }

}
