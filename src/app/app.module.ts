
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './component/navigator/navigator.component';
import { ParalaxBannerComponent } from './component/paralax-banner/paralax-banner.component';
import { ContractCardComponent } from './component/contract-card/contract-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlateCardComponent } from './component/plate-card/plate-card.component';
import { MenuIntroductionComponent } from './component/menu-introduction/menu-introduction.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { FooterComponent } from './component/footer/footer.component';
import { FeatureMenuComponent } from './page/feature-menu/feature-menu.component';
import { DetailComponentComponent } from './component/detail-component/detail-component.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DetalRowComponent } from './page/detal-row/detal-row.component';
import { PhotoComponent } from './page/photo/photo.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { ImageSlideComponent } from './component/image-slide/image-slide.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    ParalaxBannerComponent,
    ContractCardComponent,
    PlateCardComponent,
    MenuIntroductionComponent,
    AboutUsComponent,
    FooterComponent,
    FeatureMenuComponent,
    DetailComponentComponent,
    HomePageComponent,
    DetalRowComponent,
    PhotoComponent,
    NotFoundComponent,
    ImageSlideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    IvyCarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
