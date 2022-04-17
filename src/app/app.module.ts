import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorComponent } from './autor/autor.component';
import { LibroComponent } from './libro/libro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe'


@NgModule({
  declarations: [
    AppComponent,
    AutorComponent,
    LibroComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
