import { Component, HostBinding, OnInit, Input } from '@angular/core';
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
  @Input() article: Article;
  

  constructor() { 
    // article is populated by the @Input now...
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
