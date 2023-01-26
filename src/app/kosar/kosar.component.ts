import { Component, OnInit } from '@angular/core';
import { KosarService } from '../kosar.service';
import { TermekModel } from '../termek.model';

@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.css']
})
export class KosarComponent implements OnInit {

  public elemek:Map<TermekModel, number>;

  constructor(public kosarszerviz:KosarService) {
      this.elemek = this.kosarszerviz.getKosarbeliElemek();
   }

  ngOnInit(): void {
  }

}
