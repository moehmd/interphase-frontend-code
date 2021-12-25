import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';
import { MatDialog } from "@angular/material/dialog";
import { ManageBlogComponent } from 'src/app/blog/manage-blog/manage-blog.component';
import { Blog } from './../../models/blog';
import { v4 as uuidv4 } from 'uuid';
import { DeletedialogComponent } from '../manage-blog/deletedialog/deletedialog.component';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})

export class BlogDetailsComponent implements OnInit {
  selectedBlogId!: number;
  selectedBlog!: Blog;
  private routeSub: Subscription = new Subscription;
  constructor(
    private route: ActivatedRoute,
    private _blogService: BlogService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.selectedBlogId = params['id'];
    });
    this._blogService.GetSelectedBlog(this.selectedBlogId).subscribe(data => {
      this.selectedBlog = data;
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  openDialog() {
    const blogDialog = this.dialog.open(ManageBlogComponent, {
      width: "1000px",
      height: "600px",
      data: this.selectedBlog,
    });

    blogDialog.afterClosed()
      .subscribe((refreshData) => {
        if (refreshData) {
          console.log(refreshData);
        }
      });
  }

  deleteBlog(selectedBlogId: string) {
    const blogDialog = this.dialog.open(DeletedialogComponent, {
      width: "600px",
      height: "200px",
      data: selectedBlogId,
    });

    blogDialog.afterClosed()
      .subscribe((refreshData) => {
        if (refreshData) {
          console.log(refreshData);
        }
      });

  }

}