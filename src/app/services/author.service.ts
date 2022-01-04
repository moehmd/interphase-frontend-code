import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './../models/author';

@Injectable({ providedIn: 'root' })

export class AuthorService {

  private _authorAPI = "http://localhost:3666/api/authors/";

  constructor(private _http: HttpClient) { }

  GetAllAuthors(): Observable<Author[]> {
    return this._http.get<Author[]>(this._authorAPI);
  };

  GetAuthorById(_id: string): Observable<Author> {
    return this._http.get<Author>(this._authorAPI + _id);
  };

  DeleteAuthor(_id: string): Observable<Author> {
    return this._http.delete<Author>(this._authorAPI + _id);
  };

  AddAuthor(author: Author): Observable<Author> {
    let authorFormData = this.authorFormData(author);
    return this._http.post<Author>(this._authorAPI, authorFormData);
  };

  EditAuthor(_id: string, author: Author): Observable<Author> {
    let authorFormData = this.authorFormData(author);
    return this._http.put<Author>(this._authorAPI + _id, authorFormData);
  };

  authorFormData(author: Author) {
    const formData = new FormData();
    formData.append("id", author._id);
    formData.append("authorName", author.authorName);
    formData.append("author_title", author.author_title);
    formData.append("authorImage", author.authorImage);
    formData.append("authorFacebook", author.authorFacebook);
    formData.append("authorTwitter", author.authorTwitter);
    formData.append("authorLinkedIn", author.authorLinkedIn);
    return formData;
  };

};
