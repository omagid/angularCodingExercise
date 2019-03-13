import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Globals } from './services/globals';
import { HttpClientModule } from '@angular/common/http';
import { TranscriptsService } from './services/transcripts.service';
import { VideoComponent } from './components/video/video.component';
import { TranscriptsComponent } from './components/transcripts/transcripts.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    TranscriptsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule
  ],
  providers: [Globals, TranscriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
