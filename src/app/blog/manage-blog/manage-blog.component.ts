import { BlogService } from 'src/app/services/blog.service';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Blog } from 'src/app/models/blog';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.scss']
})

export class ManageBlogComponent implements OnInit {
  public blog: Blog = new Blog();

  constructor(
    private dialogref: MatDialogRef<ManageBlogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private _blogService: BlogService
  ) {
    this.blog = this.data;
  }

  ngOnInit(): void {
  }

  imgName: string = "";
  blogsImage(event: any) {
    this.imgName = "assets/images/" + event.srcElement.files[0].name;
    this.blog.image_url = this.imgName;
  }

  authorImage: string = "";
  authorsImage(event: any) {
    this.authorImage = "assets/images/" + event.srcElement.files[0].name;
    this.blog.authorImage = this.authorImage;
  };

  ManageBlog(blog: Blog) {
    if (blog.id) {
      this._blogService.EditBlog(blog);
    }
    else {
      blog.id = uuidv4();
      this._blogService.AddNewBlog(blog);
      this.reload();
    };
    this.dialogref.close([]);
    //this._blogService.GetBlogs();
    return;
  };

  reload() {
    window.location.reload()
  }

  Cancel() {
    this.dialogref.close();
  };

  public closeModal(refreshData: boolean) {
    this.dialogref.close(refreshData);
  };
}
