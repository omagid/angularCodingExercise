import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transcript } from '../../app/models/Transcript'

@Injectable({
    providedIn: 'root'
})
export class TranscriptsService {

    constructor(private httpClient: HttpClient){}

    getTranscripts(id: string): Observable<Transcript[]> {
        // move to config 
        //let url = `https://static.chorus.ai/api/${id}.json`;
        let url = `./assets/transcripts.json`;
        return this.httpClient.get<Transcript[]>(url)
    }
}

