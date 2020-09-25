import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import jsQR from 'jsqr';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  @ViewChild('video', {static: false}) video: ElementRef;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  @ViewChild('fileinput', {static: false}) fileinput: ElementRef;

  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult = null;

  userId = 3;

  constructor(public router: RouterService, private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  async ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;

    await this.startScan();
  }

  reset() {
    this.scanResult = null;
  }

  stopScan() {
    this.scanActive = false;
  }

  async startScan() {
    // Not working on iOS standalone mode!
    this.videoElement.srcObject = await navigator.mediaDevices.getUserMedia({
      video: {facingMode: 'environment'}
    });

    // Required for Safari
    this.videoElement.setAttribute('playsinline', true);

    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      this.scanActive = true;

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      // Send the token access to the API
      if (code) {
        this.scanResult = code.data;
        await this.sendAccessPermit(this.scanResult);
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  async handleFile(files: FileList) {
    const file = files.item(0);

    const img = new Image();

    img.onload = async () => {
      this.canvasContext.drawImage(img, 0, 0, this.canvasElement.width, this.canvasElement.height);
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code) {
        this.scanResult = code.data;
        await this.sendAccessPermit(this.scanResult);
      }
    };
    img.src = URL.createObjectURL(file);
  }

  async sendAccessPermit(tokenAccess) {
    const JSON = {
      patient_id: this.userId,
      token_access: tokenAccess
    }

    const response = await this.apiService.sendPostRequest('give-access', JSON)

    console.log(response)
    if (response.message['access-permit-status']){
      this.stopScan()
    }
  }
  //
  // async checkConnectionStatus(token) {
  //   const JSON = {
  //     token_access: token,
  //   };
  //
  //   for()
  // }

  delay(ms: number) {
    return new Promise(r => setTimeout(r, ms));
  }
}
