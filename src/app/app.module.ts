import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MarvelSagaComponent } from './marvel-saga/marvel-saga.component';
import { DcSagaComponent } from './dc-saga/dc-saga.component';
import { MarvelComponent } from './marvel-saga/marvel/marvel.component';
import { MarvelSagaService } from './marvel-saga/marvel-saga.service';
import { DcComponent } from './dc-saga/dc/dc.component';
import { DcSagaService } from './dc-saga/dc-saga.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MarvelSagaComponent,
    DcSagaComponent,
    MarvelComponent,
    DcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule, 
    FormsModule 
  ],
  providers: [MarvelSagaService, DcSagaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
