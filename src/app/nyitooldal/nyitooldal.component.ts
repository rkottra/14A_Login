import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nyitooldal',
  templateUrl: './nyitooldal.component.html',
  styleUrls: ['./nyitooldal.component.css']
})
export class NyitooldalComponent implements OnInit {


  public erdemjegy:number = 5;
  public adatszotar: Map<number, string> 
          = new Map<number, string>();

  constructor() { 
    this.adatszotar.set(1, "elégtelen");
    this.adatszotar.set(2, "elégséges");
    this.adatszotar.set(3, "közepes");
    this.adatszotar.set(4, "jó");
    this.adatszotar.set(5, "jeles");
  }

  ngOnInit(): void {
  }

}
