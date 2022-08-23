import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitLayoutPage } from './split-layout.page';

const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  {
    path: '',
    component: SplitLayoutPage,
    children: [
      {
        path: 'first',
        loadChildren: () => import('../first/first.module').then(m => m.FirstPageModule)
      },
      {
        path: 'second',
        loadChildren: () => import('../second/second.module').then(m => m.SecondPageModule)
      },
      {
        path: 'first/details',
        loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitLayoutPageRoutingModule { }
