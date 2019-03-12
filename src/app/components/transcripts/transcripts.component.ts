import { Component, OnInit, Input } from '@angular/core';
import { Transcript } from '../../../app/models/Transcript';
import { TranscriptsService } from '../../../app/services/transcripts.service';

@Component({
  selector: 'app-transcripts',
  templateUrl: './transcripts.component.html',
  styleUrls: ['./transcripts.component.less']
})
export class TranscriptsComponent implements OnInit {
  @Input() id;
  transcripts: Transcript[];

  constructor(private transcriptsService: TranscriptsService) { }

  ngOnInit() {
    if(this.id) { 
      this.loadTranscriptsData();
    }
  }

  loadTranscriptsData() {

    this.transcriptsService.getTranscripts(this.id).subscribe((data:[]) => {
      data.sort((a:Transcript, b:Transcript): number => a.time < b.time ? -1 : a.time > b.time ? 1 : 0)
      error => {console.log(error)}
      this.transcripts = data;
    });
  }

  getSpeakerClass(speaker) {
    return speaker == 'Cust' ? 'pink' : 'blue' ;
  }
}
