import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ManageBlogComponent } from 'src/app/blog/manage-blog/manage-blog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private _dialog: MatDialog,
  ) { }

  addBlog() {
    const blogDialog = this._dialog.open(ManageBlogComponent, {
      height: "600px",
      data: {},
    });

    blogDialog.afterClosed().subscribe();
  };

}