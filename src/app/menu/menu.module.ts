import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { Route, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes: Route[] = [
  {
    path: '',
    component: MenuComponent,
  },
];

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MatCardModule, RouterModule.forChild(routes), MatButtonModule],
})
export class MenuModule {}
