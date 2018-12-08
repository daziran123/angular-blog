import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
private article: Article;
  constructor() { }

  Article() {
    return  this.article = new Article(1, '这是标题', '2017-12-12', '文章内容');
  }
}

// articleContent(atticleid?: number) {
//   if (atticleid) {
//     return new Article(1, '标题', '2017-12-12', '文章内容');
//   } else {
//     return [
//       new Article(1, '标题', '2017-12-12', '文章内容'),
//       new Article(2, '标题', '2017-12-12', '文章内容'),
//       new Article(3, '标题', '2017-12-12', '文章内容'),
//       new Article(4, '标题', '2017-12-12', '文章内容'),
//     ];
//   }
// }
// }

   export class Article {
    constructor(public id: number,
                public title: string,
                public date: string,
                public content: string) {
    }


}
