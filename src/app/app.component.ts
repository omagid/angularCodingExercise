import { Component, OnInit, APP_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../environments/environment';
import validator from 'validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  appId;
  title = 'coding-exercise-app';
  baseUrl = environment.baseUrl;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        if(params['id'] && !validator.isUUID(params['id'])) {
          console.error("invalid get param (id)");         
          return;
        }

        this.appId = params['id'];
      });
  }
}
