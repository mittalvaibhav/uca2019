import { Injectable } from '@angular/core';
import { Book } from './interfaces/book';
import { HttpClient } from '@angular/common/http'
import { fromEventPattern } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private httpClient: HttpClient) { }

  public booksList: Book[];

  public getLatestBooks() {
    return this.httpClient.get("http://localhost:8080/book/getRecentBooks");
    // return this.booksList;
  }

  public addNewBook(newBook: Book) {
    return this.httpClient.post("http://localhost:8080/book/addNewBook", newBook);
    // this.booksList.push(newBook)
  }

}
