import { Component, OnInit, Input  } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Globals } from '../../services/globals';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit {
  baseUrl = environment.baseUrl;
  videoSrc;
  videoErr = false;

  constructor(private globals: Globals) {}

  ngOnInit() {
    if(this.globals.appId) {
      this.videoSrc = `${this.baseUrl}/api/${this.globals.appId}.mp4`;
    } else {
      this.videoErr = true;
    }
  }

  handleError() {
    this.videoErr = true;
  }
}
