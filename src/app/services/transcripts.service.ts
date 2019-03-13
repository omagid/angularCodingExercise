import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transcript } from '../../app/models/Transcript';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TranscriptsService {
    baseUrl = environment.baseUrl;

    constructor(private httpClient: HttpClient){}

    getTranscripts(id: string): Observable<Transcript[]> {
        let url = `${this.baseUrl}/api/${id}.json`;
        return this.httpClient.get<Transcript[]>(url)
    }
}

