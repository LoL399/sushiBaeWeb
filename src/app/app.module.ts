import { NgModule } from '@angular/core';
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
import { FeatureMenuComponent } from './component/feature-menu/feature-menu.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
