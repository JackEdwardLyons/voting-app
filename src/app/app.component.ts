import { Component } from '@angular/core';
import { Article }   from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[]; // An array of article

  constructor() {

    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }
  
  /* NOTES on type syntax: HTMLInputElement
   * =======================================
   * #newtitle and #newLink are now Objects that represent their associated input DOM elements 
   * (specifically, the type is HTMLInputElement). Because they are both Objects now, that means 
   * we get the value of the input tag using the '.value' method.
   * */

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Article title: ${title.value} and link: ${link.value}`);
    return false;
  }

}
