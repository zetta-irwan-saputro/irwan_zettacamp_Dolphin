import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputModule } from './input/input.module';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, InputModule, ContentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
