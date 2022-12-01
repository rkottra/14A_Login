import { Injectable } from '@angular/core';
import { TermekModel } from './termek.model';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

  public elemek:Map<TermekModel, number> 
                  = new Map<TermekModel, number>();

  getKosarbeliElemek(): Map<TermekModel, number> {
    return this.elemek;
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
    
  }

  constructor() { }
}
