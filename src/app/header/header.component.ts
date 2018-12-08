import { BlogInfoService, BlogInfo } from './../service/blog-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private bloginfo: BlogInfo;

  // 此时在构造函数中把BlogInfoService注入进来
  constructor(blogInfoService: BlogInfoService) {
    //  此段已因改造 已移至  server this.bloginfo =
    //  new BlogInfo('IBfPig', '大力的个人博客', 'angular的博客前台',
    //   '大力', '大力出奇迹', '版权信息');
   this.bloginfo = blogInfoService.BlogInfo();

   }

  ngOnInit() {
  }

}
// 首先把之前的BlogInfo移动到BlogInfoService，并写一个方法 return 出去。

// 然后在header.component.ts的构造函数中把BlogInfoService注入进来。

// constructor(blogInfoService: BlogInfoService) {
//     this.bloginfo = blogInfoService.blogInfo();
//   }

// 此段已移至 service
//    export class BlogInfo {
//     constructor(public logo: string,
//                 public title: string,
//                 public mintitle: string,
//                 public username: string,
//                 public careerdirction: string,
//                 public footerinfo: string) {
//     }




