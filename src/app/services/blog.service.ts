import { Blog } from './../models/blog';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  selectedBlogId!: any;
  selectedBlog: any;
  blogsFound: Blog[] = [];
  newBlogs: Blog[] = [];
  constructor() {
  }

  AddBlog(blog: Blog[]) {
    let hidrhigsmrhig = JSON.parse(localStorage.getItem('blogs') || '{}');
    console.log(hidrhigsmrhig);
    if (!hidrhigsmrhig || hidrhigsmrhig === [] || hidrhigsmrhig === {}) {
      return localStorage.setItem("blogs", JSON.stringify(blog))
    };
  }

  GetBlogs(): Observable<Blog[]> {
    this.blogsFound = JSON.parse(localStorage.getItem('blogs') || '{}');
    console.log(this.blogsFound);
    return of(this.blogsFound);
  };

  AddNewBlog(blog: Blog) {
    localStorage.setItem("blogs", JSON.stringify(
      Array.from(
        JSON.parse(localStorage.getItem('blogs') || '{}')
      ).concat([blog])
    ));
    return (this.GetBlogs());
  };

  GetSelectedBlog(selectedBlogId: number): Observable<Blog> {
    this.blogsFound = JSON.parse(localStorage.getItem('blogs') || '{}');
    this.selectedBlog = this.blogsFound.filter(x => x.id == selectedBlogId);
    return of(this.selectedBlog[0]);
  };

  DeleteBlogbyId(selectedBlogId: any) {
    return localStorage.setItem("blogs", JSON.stringify(
      JSON.parse(localStorage.getItem('blogs') || '{}')
        .filter(function (blogs: Blog) { return blogs.id != selectedBlogId; })
    ));
  };

  EditBlog(blog: Blog) {
    this.DeleteBlogbyId(blog.id);
    this.AddNewBlog(blog)
    return;
  };
}