import { Component, OnInit } from '@angular/core';
import { Book } from './../interfaces/book';
import { BookDataService } from './../book-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  private newBook: Book = {
    bookName: "Old Value"
  };

  constructor(private bookDataService: BookDataService, private router: Router) { }

  ngOnInit() {
  }

  submitBook() {
    console.log(`The new book value is: ${this.newBook.bookName}`);
    let dataObject = JSON.parse(JSON.stringify(this.newBook));
    this.bookDataService.addNewBook(dataObject).subscribe(response => {
      alert("Book added successfully");
      this.router.navigateByUrl("");
    }, error => {
      alert("Error adding book, please try again");
    });
  }

}
