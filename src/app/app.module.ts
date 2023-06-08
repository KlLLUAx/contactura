import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReleaseRoutingModule } from './release/release-routing.module';
import { ReportsRoutingModule } from './reports/reports-routing.module';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { SingUpComponent } from './components/sing-up/sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    SingUpComponent,

  ],
  imports: [
    AppMaterialModule,
    ReportsRoutingModule,
    ReleaseRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
