import { BlogService } from 'src/app/services/blog.service';
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})

export class DeletedialogComponent {

  constructor(
    private dialogref: MatDialogRef<DeletedialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private _blogService: BlogService
  ) {
  }

  DeleteBlog(selectedBlogId: string) {
    this._blogService.DeleteBlogbyId(selectedBlogId);
    this.dialogref.close([]);
  }

  Cancel() {
    this.dialogref.close();
  }
}
