import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { Route, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
const routes: Route[] = [
  {
    path: '',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule],
})
export class AboutModule {}
