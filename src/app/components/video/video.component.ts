import { Component, OnInit, Input  } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit {
  @Input() id;
  baseUrl = environment.baseUrl;
  videoSrc;

  constructor() {}

  ngOnInit() {
    if(this.id) {
      this.videoSrc = `${this.baseUrl}/api/${this.id}.mp4`;
    }
  }
}
