import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-fejlec',
  templateUrl: './fejlec.component.html',
  styleUrls: ['./fejlec.component.css']
})
export class FejlecComponent implements OnInit {

  public kepurl:SafeUrl;

  constructor(private sanitizer:DomSanitizer) { 
    this.kepurl = sanitizer.bypassSecurityTrustUrl("https://www.logodesign.net/images/home-page-logo-03.png");

  }

  ngOnInit(): void {
  }

}
