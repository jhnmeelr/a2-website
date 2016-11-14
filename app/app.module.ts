import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from './components/pages/about.component';
import { HomeComponent } from './components/pages/home.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        AboutComponent,
        HomeComponent,
        JumbotronComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }