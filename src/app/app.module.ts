import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { Content1Component } from './content1/content1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    Content1Component,
  ],

  imports: [BrowserModule],
  providers: [],

  bootstrap: [AppComponent],

  entryComponents: [],
})
export class AppModule {}
