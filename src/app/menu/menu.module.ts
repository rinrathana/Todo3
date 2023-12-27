import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { Route } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

const routes: Route[] = [
  {
    path: '',
    component: MenuComponent,
  },
];

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MatCardModule],
})
export class MenuModule {}
