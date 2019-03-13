import { Component, OnInit, Input } from '@angular/core';
import { Transcript } from '../../../app/models/Transcript';
import { TranscriptsService } from '../../../app/services/transcripts.service';
import { Globals } from '../../services/globals'; 

@Component({
  selector: 'app-transcripts',
  templateUrl: './transcripts.component.html',
  styleUrls: ['./transcripts.component.less']
})
export class TranscriptsComponent implements OnInit {
  @Input() id;
  transcripts: Transcript[];

  constructor(private transcriptsService: TranscriptsService, private globals: Globals) { }

  ngOnInit() {
    if(this.globals.appId) { 
      this.loadTranscriptsData(this.globals.appId);
    }
  }

  loadTranscriptsData(id) {
    this.transcriptsService.getTranscripts(id).subscribe((data:[]) => {
      data.sort((a:Transcript, b:Transcript): number => a.time < b.time ? -1 : a.time > b.time ? 1 : 0)
      error => {console.error(error)}
      this.transcripts = data;
    });
  }

  getSpeakerClass(speaker, index) {
    
    let speakerClass = '';
    //check if last speaker or same speaker
    if ( index == (this.transcripts.length-1) 
        || (this.transcripts[index].speaker != this.transcripts[index+1].speaker)) {
   
          speakerClass = speaker == 'Cust' ? 'pink' : 'blue' ;
    }

    return speakerClass;
  }

  isDifferentSpeaker(index) {
    //check if first speaker or different
    return index==0 || (this.transcripts[index].speaker != this.transcripts[index-1].speaker)
  }
}
