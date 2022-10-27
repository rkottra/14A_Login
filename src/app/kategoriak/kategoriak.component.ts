import { Component, OnInit } from '@angular/core';
import { TermekModel } from '../termek.model';

@Component({
  selector: 'app-kategoriak',
  templateUrl: './kategoriak.component.html',
  styleUrls: ['./kategoriak.component.css']
})
export class KategoriakComponent implements OnInit {

  public termekek :TermekModel[] = [
    {
      nev : "alma",
      leiras: "",
      ar: 100,
      img: ""
    },
    {
      nev : "körte",
      leiras: "Nagyon finom",
      ar: 150,
      img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Pears.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
