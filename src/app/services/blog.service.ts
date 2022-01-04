import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Blog } from './../models/blog';

@Injectable({ providedIn: 'root' })

export class BlogService {
  private _blogAPI = "http://localhost:3666/api/blogs/";

  constructor(private _http: HttpClient) { }

  GetAllBlogs(): Observable<Blog[]> {
    return this._http.get<Blog[]>(this._blogAPI);
  };

  GetBlogById(_id: string): Observable<Blog> {
    return this._http.get<Blog>(this._blogAPI + _id);
  };

  AddBlog(blog: Blog): Observable<Blog> {
    let blogFormData = this.blogFormData(blog);
    return this._http.post<Blog>(this._blogAPI, blogFormData);
  };

  EditBlog(_id: string, blog: Blog): Observable<Blog> {
    let blogFormData = this.blogFormData(blog);
    return this._http.put<Blog>(this._blogAPI + _id, blogFormData);
  };

  DeleteBlog(_id: string): Observable<Blog> {
    return this._http.delete<Blog>(this._blogAPI + _id);
  };

  blogFormData(blog: Blog) {
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("category", blog.category);
    formData.append("post_date", blog.post_date);
    formData.append("image_url", blog.image_url);
    formData.append("banner", blog.banner);
    formData.append("body", blog.body);
    formData.append("footing", blog.footing);
    formData.append("authorName", blog.authorName);
    formData.append("author_title", blog.author_title);
    formData.append("authorImage", blog.authorImage);
    formData.append("authorFacebook", blog.authorFacebook);
    formData.append("authorTwitter", blog.authorTwitter);
    formData.append("authorLinkedIn", blog.authorLinkedIn);
    return formData;
  };

};
