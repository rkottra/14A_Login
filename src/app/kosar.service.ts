import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TermekModel } from './termek.model';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

  public elemek:Map<TermekModel, number> 
                  = new Map<TermekModel, number>();
  public osszeg:number = 0;

  getKosarbeliElemek(): Map<TermekModel, number> {
    return this.elemek;
  }

  kosarOsszegenekKiszamitasa() {
    this.osszeg = 0;
    this.elemek.forEach((db: number, termek: TermekModel) => {
      this.osszeg += termek.ar*db;
    });
  }

  teddBeleAKosarba(termek: TermekModel, db: number) {
    if (this.elemek.has(termek)) {
      const regi_db = this.elemek.get(termek);
      if (regi_db !== undefined) {
        this.elemek.set(termek, regi_db+db);
      }
    } else {
      this.elemek.set(termek, db);
    }
    this.kosarOsszegenekKiszamitasa();
  }

  constructor() { 

  }
}
