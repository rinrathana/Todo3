import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { Route } from '@angular/router';
const routes: Route[] = [
  {
    path: '',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule],
})
export class AboutModule {}
