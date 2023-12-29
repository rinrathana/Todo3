import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from '../menu/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('../menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('../contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
