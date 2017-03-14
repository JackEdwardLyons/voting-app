import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* NOTES on type syntax: HTMLInpurElement
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
