import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassComponent } from './pass/pass.component';
import { FailComponent } from './fail/fail.component';

@NgModule({
  declarations: [
    AppComponent,
    PassComponent,
    FailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
