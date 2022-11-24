import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '14A_Login';

  public HibaBeallitas(error: string) {
    this.e = error;
  }

  public e: string = "";
}
