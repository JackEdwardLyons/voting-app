import { Component, HostBinding, OnInit } from '@angular/core';
import { Article } from '../article/article.model'; 

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {

  /* HOST BINDING 
   * Allows us to encapsulate this component in a 'row' class.
   * ---------------------------------------------------------*/
  @HostBinding('attr.class') cssClass = 'row';
  // Inject the Article model
  article: Article;

  constructor() { 
    // construct a new Article
    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10
    )
  }


  /* Moving logic into the Model 
     ---------------------------
   * The idea is that we want to move most of our logic to
   * our models so that our components do the minimum work possible.
   */

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
