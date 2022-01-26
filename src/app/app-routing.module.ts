import { NotFoundComponent } from './page/not-found/not-found.component';
import { PhotoComponent } from './page/photo/photo.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { FeatureMenuComponent } from './page/feature-menu/feature-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  // { path: 'feature-menu', component: FeatureMenuComponent },
  // { path: 'photos', component: PhotoComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
