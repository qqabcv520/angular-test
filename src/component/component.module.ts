import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { ArticleBlockComponent } from './article-block/article-block.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    HeaderTitleComponent,
    ArticleBlockComponent,
  ],
  declarations: [HeaderTitleComponent, ArticleBlockComponent],
})
export class ComponentModule { }
