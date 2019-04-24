import { Component, OnInit } from '@angular/core';
import { Book } from "./../interfaces/book";
import { BookDataService } from './../book-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.css']
})
export class RecentBooksComponent implements OnInit {

  public showTable = true;
  public booksList: any;
  constructor( private bookDataService: BookDataService, private router: Router ) { }

  ngOnInit() {
    this.bookDataService.getLatestBooks().subscribe(response => {
      this.booksList = response;
      console.log("The response is: ", response);
    });
  }

  private editBook(selectedBook: Book) {
    this.bookDataService.setSelectedBookForEdit(selectedBook);
    this.router.navigateByUrl('editBook');
  }

  private deleteBook() {
    console.log('delete book called');
  }

  public toggleTableVisibility() {
    this.showTable = !this.showTable;
  }

}
