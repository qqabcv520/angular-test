import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { ArticleBlockComponent } from './article-block/article-block.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderTitleComponent,
    ArticleBlockComponent,
  ],
  declarations: [HeaderTitleComponent, ArticleBlockComponent],
})
export class ComponentModule { }
