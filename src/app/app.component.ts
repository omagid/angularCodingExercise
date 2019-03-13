import { Component, OnInit, APP_ID } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'coding-exercise-app';
  baseUrl = environment.baseUrl;

  constructor() {}

  ngOnInit() { }
}
