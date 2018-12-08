import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
//  点击文章列表之后进行跳转，
//   则需要在文章列表的 li 标签上进行相应的操作
//   ，在这里用点击事件来做这一块。
// 首先在构造函数中引入路由：public router: Router
  private articles: Article[];

  constructor(public router: Router) {
    this.articles = [
      new Article(1, '标题', '2017-11-12', '文章内容'),
      new Article(2, '标题', '2017-12-12', '文章内容'),
      new Article(3, '标题', '2017-10-12', '文章内容'),
      new Article(4, '标题', '2017-12-12', '文章内容'),
    ];
   }

  ngOnInit() {
  }
  // 创建函数
  articleNav(article: Article) {
    this.router.navigateByUrl('article/' + article.id);
    // 传进来的参数就是我们渲染到页面中的arcitle
    console.log(1);

  }
}

  export class Article {
    constructor(public id: number,
                public title: string,
                public date: string,
                public content: string) {
    }
  }
