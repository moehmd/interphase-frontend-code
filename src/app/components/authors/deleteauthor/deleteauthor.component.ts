import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-deleteauthor',
  templateUrl: './deleteauthor.component.html',
  styleUrls: ['./deleteauthor.component.scss']
})
export class DeleteauthorComponent {

  constructor(
    private dialogref: MatDialogRef<DeleteauthorComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: string,
    private _authorService: AuthorService,
  ) { }

  DeleteAuthor(selectedAuthorId: string) {
    this._authorService.DeleteAuthor(selectedAuthorId).subscribe();
    this.dialogref.close();
    this.dialogref.afterClosed().subscribe();
  };

  Cancel() {
    this.dialogref.close();
  }
}
