import { Component, Input, OnInit } from '@angular/core';
import { KosarService } from '../kosar.service';
import { TermekModel } from '../termek.model';

@Component({
  selector: 'app-termek',
  templateUrl: './termek.component.html',
  styleUrls: ['./termek.component.css']
})
export class TermekComponent implements OnInit {

  @Input() termek:TermekModel 
              = new TermekModel();
  public db:number = 1;

  constructor(private kosarszerviz:KosarService) { }

  ngOnInit(): void {
  }

  Kosarba() {
     this.kosarszerviz
      .teddBeleAKosarba(this.termek, this.db);
  }

}
