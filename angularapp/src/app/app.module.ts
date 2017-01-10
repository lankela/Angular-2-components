import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppcomponentComponent } from './appcomponent/appcomponent.component';
import { SecondappcomponentComponent } from './secondappcomponent/secondappcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    AppcomponentComponent,
    SecondappcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
