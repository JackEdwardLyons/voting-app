export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link  = link;
    this.votes = votes;
  }
  
  /* Vote function in the Model
    ---------------------------
   * The reason we have a voteUp() and a voteDown() on both classes is because each function
   * does a slightly different thing. The idea is that the voteUp() on the ArticleComponent
   * relates to the component view, whereas the Article model voteUp() defines what
   * mutations happen in the model. */

  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

  domain(): string {
    try {
      // split the URL, eg: http://www.jacklyons.me 
      const domainAndPath: string = this.link.split('//')[1];
      // www.jacklyons.me
      return domainAndPath.split('/')[0];
    } catch(err) {
        return null;
    }
  }

}