import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit {
  @Input() id;
  videoSrc;

  constructor() {}

  ngOnInit() {
    if(this.id) {
      // move to config
      this.videoSrc = `https://static.chorus.ai/api/${this.id}.mp4`;
    }
  }
}
