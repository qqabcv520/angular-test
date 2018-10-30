import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatGridListModule,
  MatIconModule,
  MatSidenavModule, MatListModule,
} from '@angular/material';

import {IndexComponent} from './index/index.component';
import {BlogRoutingModule} from './blog-routing.module';
import {TagComponent} from './tag/tag.component';
import {BlogComponent} from './blog.component';
import {ComponentModule} from '../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ComponentModule,
  ],
  declarations: [
    BlogComponent,
    IndexComponent,
    TagComponent,
  ]
})
export class BlogModule {
}
