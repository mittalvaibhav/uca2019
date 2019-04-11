import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() attUserName;
  @Output() updateUserNameEvent: EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateUser() {
    this.updateUserNameEvent.emit("HardCoded UserName");
  }

}
