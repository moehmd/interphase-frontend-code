import { BlogService } from 'src/app/services/blog.service';
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})

export class DeletedialogComponent {

  constructor(
    private dialogref: MatDialogRef<DeletedialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: string,
    private _blogService: BlogService,
    private _router: Router
  ) { }

  DeleteBlog(selectedBlogId: string) {
    this._blogService.DeleteBlog(selectedBlogId).subscribe();
    this.dialogref.close();
    this.dialogref.afterClosed().subscribe(() => {
      this._router.navigateByUrl('/blogs');
    });
  };

  Cancel() {
    this.dialogref.close();
  }
}
