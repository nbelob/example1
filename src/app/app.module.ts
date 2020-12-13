import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './component';
import { AppComponent } from './app.component';
import { PaAttrDirective } from './attr.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ProductComponent, AppComponent, PaAttrDirective],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
