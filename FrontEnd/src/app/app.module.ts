import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { RouterModule, Routes} from '@angular/router';
import { RecentBooksComponent } from './recent-books/recent-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {path: "", component: RecentBooksComponent },
  {path: "requestBook", component: RequestBookComponent },
  {path: "addBook", component: AddBookComponent },
  {path: "editBook", component: EditBookComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    NavBarComponent,
    MainPageComponent,
    FooterBarComponent,
    RequestBookComponent,
    RecentBooksComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
