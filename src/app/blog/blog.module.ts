import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogComponent } from './blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ManageBlogComponent } from './manage-blog/manage-blog.component';
import { DeletedialogComponent } from './manage-blog/deletedialog/deletedialog.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';


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
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule
  ],
  exports: [
    BlogComponent,
    ManageBlogComponent
  ]
})
export class BlogModule { }
