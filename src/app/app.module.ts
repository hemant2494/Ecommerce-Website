import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { AdvertisementBannerComponent } from './advertisement-banner/advertisement-banner.component';
import { DealOfDayComponent } from './deal-of-day/deal-of-day.component';
import { TrendingCategoryComponent } from './trending-category/trending-category.component';
import { CompareProductsComponent } from './compare-products/compare-products.component';
import { TrendingSearchesComponent } from './trending-searches/trending-searches.component';
import { ProductMobilesComponent } from './product-mobiles/product-mobiles.component';
import { ProductAdvertisementHomeComponent } from './product-advertisement-home/product-advertisement-home.component';
import { ProductWashingMachineComponent } from './product-washing-machine/product-washing-machine.component';
import { ProductFurnituresComponent } from './product-furnitures/product-furnitures.component';
import { SmartprixFooterComponent } from './smartprix-footer/smartprix-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHomepageComponent,
    TopNavComponent,
    AdvertisementBannerComponent,
    DealOfDayComponent,
    TrendingCategoryComponent,
    CompareProductsComponent,
    TrendingSearchesComponent,
    ProductMobilesComponent,
    ProductAdvertisementHomeComponent,
    ProductWashingMachineComponent,
    ProductFurnituresComponent,
    SmartprixFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
