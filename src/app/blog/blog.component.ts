import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import blogData from '../../assets/blog.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  constructor(private _blogService: BlogService) { }

  ngOnInit(): void {
    this.AddBlogfromService();
    this.GetBlogsfromService();
  }

  AddBlogfromService() {
    this._blogService.AddBlog(blogData);
  }

  GetBlogsfromService() {
    this._blogService.GetBlogs().subscribe(data => {
      this.blogs = data;
    });
  }
}
