import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  /* You can think of an NgModule a bit like a package 
   * and declarations states what components are
   * owned by this module. 
   * */
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  /* You put something in your  imports if 
   * you're going to use it in your templates.
   * */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  /* to make a service available to be injected throughout
   * our application, add it in providers.
   * */
  providers: [],
  /* We need to bootstrap AppComponent
   * as the top-level component. 
   * */
  bootstrap: [AppComponent]
})
export class AppModule { }
