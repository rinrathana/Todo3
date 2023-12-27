import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { Route } from '@angular/router';
const routes: Route[] = [
  {
    path: '',
    component: ContactComponent,
  },
];

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule],
})
export class ContactModule {}
