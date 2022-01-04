import { Component, Inject, Optional } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { AuthorService } from 'src/app/services/author.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Blog } from 'src/app/models/blog';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.scss']
})

export class ManageBlogComponent {
  public blog: Blog = new Blog();
  public authors: Author[] = [];
  public selectedAuthor: Author = new Author()
  blogImageDataURL: any;
  authorImageDataURL: any;
  panelOpenState: boolean = false;

  constructor(
    private dialogref: MatDialogRef<ManageBlogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Blog,
    private _blogService: BlogService,
    private _authorService: AuthorService,
  ) { this.blog = this.data };


  blogsImage(event: any) {
    const blogImageSelected = event.srcElement.files[0];
    const blogImgReader = new FileReader();
    blogImgReader.onload = () => {
      this.blogImageDataURL = blogImgReader.result as String;
    };
    blogImgReader.readAsDataURL(blogImageSelected);
    this.blog.image_url = blogImageSelected;
  };

  ManageBlog(blog: Blog) {

    if (blog._id) {
      this.assignAuthorToBlog();
      this._blogService.EditBlog(blog._id, blog).subscribe();
      this.dialogref.close();
    }
    else {
      this.assignAuthorToBlog();
      this._blogService.AddBlog(blog).subscribe();
      this.dialogref.close([]);
    };

    this.reload();
  };

  getAuthorsList() {
    this._authorService.GetAllAuthors().subscribe(res => { this.authors = res });
  };

  selectAuthor(authorId: string) {
    this._authorService.GetAuthorById(authorId)
      .subscribe(res => {
        this.selectedAuthor = res;
        delete this.selectedAuthor._id;
        this.assignAuthorToBlog();
      });
    this.toggleExpandPanel();
  };

  assignAuthorToBlog() {
    if (this.selectedAuthor && this.selectedAuthor != null) {
      this.blog = { ...this.blog, ...this.selectedAuthor };
    };
  };

  toggleExpandPanel() {
    this.panelOpenState = !this.panelOpenState;
  };

  reload() {
    window.location.reload()
  };

  Cancel() {
    this.dialogref.close();
  };

}
