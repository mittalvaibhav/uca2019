import { Component, OnInit } from '@angular/core';
import { BookDataService } from './../book-data.service'; 
import { Book } from '../interfaces/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  public selectedBook: Book;
  constructor(private bookDataService: BookDataService, private router: Router ) { }

  ngOnInit() {
    this.selectedBook = this.bookDataService.getSelectedBookForEdit();
    console.log(`Selected book in edit book component is: ${JSON.stringify(this.selectedBook)}`);
  }

  updateBook() {
    this.bookDataService.updateBook(this.selectedBook).subscribe(response => {
      console.log(response);
      alert("Book details updated successfully");
      this.router.navigateByUrl('');
    }, error => {
      alert("error updateing book");
    })
  }

}
