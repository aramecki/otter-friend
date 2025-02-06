import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ToursComponent } from './tours/tours.component';
import { TitleComponent } from './title/title.component';
import { TourComponent } from './tour/tour.component';
import { FooterComponent } from './footer/footer.component';
import { PageLinkComponent } from './page-link/page-link.component';
import { PageLinksComponent } from './page-links/page-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageComponent,
    AboutComponent,
    ServicesComponent,
    ToursComponent,
    TitleComponent,
    TourComponent,
    FooterComponent,
    PageLinkComponent,
    PageLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ServicesComponent,
    ToursComponent,
    TitleComponent,
    TourComponent,
    FooterComponent,
    PageLinkComponent,
    PageLinksComponent
  ]
})
export class AppModule { }
