import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { MatToolbarModule} from '@angular/material/toolbar'
import { MatListModule} from '@angular/material/list'
import { MatGridListModule} from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule }from '@angular/material/dialog'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule} from '@angular/flex-layout'
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing/app-routing.module';

import 'hammerjs';
// Component
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WeatherComponent } from './weather/weather.component';


// Services
import { DishService} from './services/dish.service';
import { PromotionService } from "./services/promotion.service";
import { LeaderService} from './services/leader.service';
import { LoginComponent } from './login/login.component'
import { ProcessHttpMsgService } from './services/process-http-msg.service';



import { baseURL } from './shared/baseurl';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    { provide: 'BaseURL',useValue:baseURL},
    ProcessHttpMsgService
  ],
  // for using the overlay component
  entryComponents:[
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
