import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  @Input() attUserName;

  public name: string = "UCA";

  constructor() { }

  ngOnInit() {
    console.log(`The input attribute value is : ${this.attUserName}`);
  }

}
