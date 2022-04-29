import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaComponent } from './compiler/java/java.component';
import {HttpClientModule} from "@angular/common/http";
import { PythonComponent } from './compiler/python/python.component';
import { CppComponent } from './compiler/cpp/cpp.component';
@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    PythonComponent,
    CppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
