import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DcSagaComponent } from './dc-saga/dc-saga.component';
import { DcComponent } from './dc-saga/dc/dc.component';
import { MarvelSagaService } from './marvel-saga/marvel-saga.service';
import { MarvelComponent } from './marvel-saga/marvel/marvel.component';
import { MarvelSagaComponent } from './marvel-saga/marvel-saga.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MarvelSagaComponent,
    DcSagaComponent,
    DcComponent,
    MarvelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MarvelSagaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
