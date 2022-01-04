import { Subscription } from 'rxjs';
import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: Blog[] = [];
  private _blogSubscription = new Subscription();
  constructor(
    private _blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.GetBlogs();
  };

  GetBlogs() {
    this._blogService.GetAllBlogs().subscribe(res => { this.blogs = res; });
  };

  ngOnDestroy() {
    this._blogSubscription.unsubscribe();
  };

}
