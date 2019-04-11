import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  userName = "Akshay"
  public name: string = "Math"
  private colorChanged: boolean;

  getNewUserName(userName: string) {
    this.userName = userName;
  }
}
