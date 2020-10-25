import { Routes} from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishDetailComponent } from '../dish-detail/dish-detail.component'
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { WeatherComponent } from '../weather/weather.component';
import { NotFoundComponent } from '../not-found/not-found.component'


export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'menu',component:MenuComponent},
    {path:'dishdetail/:id', component: DishDetailComponent},
    {path:'contactus', component:ContactComponent},
    {path:'weather',component:WeatherComponent},
    { path:'404',component:NotFoundComponent},
    {path:'', 
        redirectTo: '/home', 
        pathMatch:'full'
    },
    {path:'**', component:NotFoundComponent}, //catch any urls

];