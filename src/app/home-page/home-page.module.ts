import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { Route, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent, NavbarComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatToolbarModule, MatButtonModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
