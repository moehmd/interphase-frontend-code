import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BlogRoutingModule } from './blog-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { BlogComponent } from './blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ManageBlogComponent } from './manage-blog/manage-blog.component';
import { DeletedialogComponent } from './manage-blog/deletedialog/deletedialog.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailsComponent,
    ManageBlogComponent,
    DeletedialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BlogRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule
  ],
  exports: [
    BlogComponent,
    ManageBlogComponent
  ]
})
export class BlogModule { }
