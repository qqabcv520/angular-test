import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
} from '@angular/material';

import {IndexComponent} from './index/index.component';
import {BlogRoutingModule} from './blog-routing.module';
import { TagComponent } from './tag/tag.component';
import {BlogComponent} from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  declarations: [
    BlogComponent,
    IndexComponent,
    TagComponent,
  ]
})
export class BlogModule {
}
