import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkComponent } from './components/content/work/work.component';
import { CultureComponent } from './components/content/culture/culture.component';
import { CareersComponent } from './components/content/careers/careers.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { DeleteauthorComponent } from './components/authors/deleteauthor/deleteauthor.component';
import { ManageauthorComponent } from './components/authors/manageauthor/manageauthor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    WorkComponent,
    CultureComponent,
    CareersComponent,
    ContactComponent,
    AuthorsComponent,
    DeleteauthorComponent,
    ManageauthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule
  ],
  exports: [
    ManageauthorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
