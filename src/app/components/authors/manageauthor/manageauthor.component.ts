import { Component, Inject, Optional } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-manageauthor',
  templateUrl: './manageauthor.component.html',
  styleUrls: ['./manageauthor.component.scss']
})
export class ManageauthorComponent {
  public author: Author = new Author();
  authorImageDataURL: string = "";

  constructor(
    private dialogref: MatDialogRef<ManageauthorComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Author,
    private _authorService: AuthorService
  ) { this.author = this.data }

  authorsImage(event: any) {
    const authorImageSelected = event.srcElement.files[0];
    const authorImgReader = new FileReader();
    authorImgReader.onload = () => {
      this.authorImageDataURL = authorImgReader.result as string;
    };
    authorImgReader.readAsDataURL(authorImageSelected);
    this.author.authorImage = authorImageSelected;
  };

  ManageAuthor(manageAuthor: Author) {
    if (manageAuthor._id) {
      this._authorService.EditAuthor(manageAuthor._id, manageAuthor).subscribe();
      this.dialogref.close();
    }
    else {
      this._authorService.AddAuthor(manageAuthor).subscribe();
      this.dialogref.close();
    };
    this.reload();
  };

  reload() {
    window.location.reload()
  };

  Cancel() {
    this.dialogref.close();
  };

}
