import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menupontok = [
    {
      text: "Nyitó oldal",
      link: ""
    },
    {
      text: "Kategóriák",
      link: "/kategóriák"
    },
    {
      text: "Kapcsolat",
      link: "/kapcsolat"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
