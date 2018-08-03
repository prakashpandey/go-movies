import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AvailableRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(AvailableRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
