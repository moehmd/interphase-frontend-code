import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';
import { MatDialog } from "@angular/material/dialog";
import { ManageBlogComponent } from 'src/app/blog/manage-blog/manage-blog.component';
import { Blog } from './../../models/blog';
import { DeletedialogComponent } from '../manage-blog/deletedialog/deletedialog.component';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})

export class BlogDetailsComponent implements OnInit {
  selectedBlogId!: string;
  errorHandler: string = "";
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
    this._blogService.GetBlogById(this.selectedBlogId).subscribe(data => {
      if (data) {
        this.selectedBlog = data;
      } else {
        this.errorHandler = "this Id does not match any blog!";
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  openDialog() {
    const blogDialog = this.dialog.open(ManageBlogComponent, {
      height: "600px",
      data: this.selectedBlog,
    });
    blogDialog.afterClosed().subscribe();
  }

  deleteBlog(selectedBlogId: string) {
    const blogDialog = this.dialog.open(DeletedialogComponent, {
      data: selectedBlogId,
    });
    blogDialog.afterClosed().subscribe(() => { this.reload() });
  };

  reload() {
    window.location.reload();
  };

}