import { GuestbookService, Guestbook} from './../../service/guestbook.service';
import { ArticleService, Article} from './../../service/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  private article: Article;
  private guestbooks;
  constructor(
    private articleService: ArticleService,
    private guestbookService: GuestbookService
  ) {
    // this.article = new Article(1, '这是标题', '2017-12-12', '文章内容');  转移到 service
      this.article = articleService.Article();
      this.guestbooks = this.guestbookService.getGuestbook(1);
  }
  commentSubmit(formValue: any) {
    this.guestbookService.postGuestbook(1, formValue);
  }
  ngOnInit() {
  } }
//  转移到 service
//   export class Article {
//     constructor(public id: number,
//                 public title: string,
//                 public date: string,
//                 public content: string) {
//     }

// }
