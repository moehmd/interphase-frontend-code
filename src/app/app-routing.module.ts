import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CareersComponent } from 'src/app/components/content/careers/careers.component';
import { CultureComponent } from 'src/app/components/content/culture/culture.component';
import { WorkComponent } from 'src/app/components/content/work/work.component';
import { ContactComponent } from 'src/app/components/content/contact/contact.component';
import { AuthorsComponent } from 'src/app/components/authors/authors.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  { path: 'blogs', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'careers', component: CareersComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'work', component: WorkComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'getintouch', component: ContactComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
