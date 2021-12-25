import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ManageBlogComponent } from 'src/app/blog/manage-blog/manage-blog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const blogDialog = this.dialog.open(ManageBlogComponent, {
      width: "1000px",
      height: "800px",
      data: {},
    });
    blogDialog.afterClosed()
      .subscribe((refreshData) => {
        if (refreshData) {
          console.log(refreshData);
        }
      });
  }

}