import { Component, OnInit } from '@angular/core';
import { Book } from "./../interfaces/book";
import { BookDataService } from './../book-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public showTable = true;
  public booksList: Book[];
  constructor( private bookDataService: BookDataService ) { }

  ngOnInit() {
    // this.booksList = this.bookDataService.getLatestBooks();
  }
  public toggleTableVisibility() {
    this.showTable = !this.showTable;
  }
}
