import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {TagComponent} from './tag/tag.component';
import {BlogComponent} from './blog.component';


const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {path: '', component: IndexComponent},
      {path: 'tag', component: TagComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}
