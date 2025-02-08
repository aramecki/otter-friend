import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RedMessageComponent } from './red-message/red-message.component';

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
    PageLinksComponent,
    ServiceComponent,
    SignupComponent,
    HomeComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    RedMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
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
    PageLinksComponent,
    ServiceComponent,
    SignupComponent,
    HomeComponent,
    RedMessageComponent
  ]
})
export class AppModule { }
