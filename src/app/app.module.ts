import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
import { ProductComponent } from './component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [ProductComponent, AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
