import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleBlockComponent } from './article-block/article-block.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { InputComponent } from './input/input.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    ArticleBlockComponent,
    InputComponent,
    BannerComponent,
  ],
  declarations: [
    ArticleBlockComponent,
    InputComponent,
    BannerComponent,
  ],
})
export class ComponentModule { }
