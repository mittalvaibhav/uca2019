import { Component, OnInit } from '@angular/core';
import { Book } from "./../interfaces/book";
import { BookDataService } from './../book-data.service';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.css']
})
export class RecentBooksComponent implements OnInit {

  public showTable = true;
  public booksList: any;
  constructor( private bookDataService: BookDataService ) { }

  ngOnInit() {
    this.bookDataService.getLatestBooks().subscribe(response => {
      this.booksList = response;
      console.log("The response is: ", response);
    });
  }

  public toggleTableVisibility() {
    this.showTable = !this.showTable;
  }

}
