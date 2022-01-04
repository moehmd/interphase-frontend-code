import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author';
import { DeleteauthorComponent } from 'src/app/components/authors/deleteauthor/deleteauthor.component';
import { ManageauthorComponent } from 'src/app/components/authors/manageauthor/manageauthor.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  dataSource: Author[] = [];
  displayedColumns: string[] = [
    'authorImage',
    'authorName',
    'author_title',
    'authorFacebook',
    'controls'
  ];

  constructor(
    private _authorService: AuthorService,
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getAuthorsList();
  }

  getAuthorsList() {
    this._authorService.GetAllAuthors().subscribe(res => { if (res) { this.dataSource = res } });
  };

  deleteAuthor(authorId: string) {
    const authorDialog = this._dialog.open(DeleteauthorComponent, { data: authorId });
    authorDialog.afterClosed().subscribe(() => { this.reload() });
  };

  addAuthor() {
    const addAuthorDialog = this._dialog.open(ManageauthorComponent, {
      height: "600px",
      data: {},
    });
    addAuthorDialog.afterClosed().subscribe(() => { this.reload() });
  };

  editAuthor(selectedAuthor: Author) {
    const editAuthorDialog = this._dialog.open(ManageauthorComponent, {
      height: "600px",
      data: selectedAuthor,
    });
    editAuthorDialog.afterClosed().subscribe(() => { this.reload() });
  };

  reload() {
    window.location.reload();
  };
}






