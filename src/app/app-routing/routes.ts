import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { PicdetailComponent} from '../picdetail/picdetail.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'picdetail/:id', component: PicdetailComponent},
  { path: 'contactus', component: ContactComponent },
  { path: 'aboutus', component: AboutComponent}



]
