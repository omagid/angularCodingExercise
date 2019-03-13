import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import validator from 'validator';

@Injectable()
export class Globals {
  appId;

  constructor(private activatedRoute: ActivatedRoute) {

        let urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id')
        
        if(id && !validator.isUUID(id)) {
            console.error("invalid get param (id)");         
            return;
        }

        this.appId = id; 
    } 
}