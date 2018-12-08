import { BlogInfoService, BlogInfo, Menu , MyInfo } from './../service/blog-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements OnInit {

  // 已转移
//  定义一个变量
  private bloginfo: BlogInfo;
  //  定义一个变量
  private menus: Menu[];
  //  定义一个变量
  private myinfos: MyInfo[];

  // 引入服务


  constructor(blogInfoService: BlogInfoService) {
    // 在构造函数中进行赋值：转移至blog-service
    // this.bloginfo = new BlogInfo('IBfPig', '大力的个人博客', 'angular的博客前台', '大力', '大力出奇迹', '版权信息');
    // this.menus = [
    //   new Menu(1, 'Blog', './home'),
    //   new Menu(2, 'AnClub', 'https://www.ngclub.cn')
    // ];
    // // 在构造函数中进行赋值：
    // this.myinfos = [
    //   new MyInfo(1, 'Twitter', 'https://twitter.com/ibfpig', 'icon iconfont icon-twitter'),
    //   new MyInfo(2, 'Github', 'https://github.com/BfPig/', 'icon iconfont icon-github'),
    //   new MyInfo(3, 'Email', 'mailto:me@ibfpig.com', 'icon iconfont icon-email'),
    // ];
  this.bloginfo = blogInfoService.BlogInfo();
   this.menus = blogInfoService.Menu();
   this.myinfos = blogInfoService.MyInfo();

  }

  ngOnInit() {
  }
}
// 构建一个 BlogInfo 的类
// export class BlogInfo {
//   constructor(public logo: string,
//               public title: string,
//               public mintitle: string,
//               public username: string,
//               public careerdirction: string,
//               public footerinfo: string) {
//   }
// }
// 构建一个 Menu 的类
// export class Menu {
//   constructor(public id: number,
//               public name: string,
//               public link: string) {
//   }
// }
// 构建一个 MyInfo 的类
// export class MyInfo {
//   constructor(public id: number,
//               public name: string,
//               public link: string,
//               public ico: string) {
//   }
// }
//  数据模拟 步骤
//  1.构建一个类
//  export class BlogInfo {
//   constructor(public logo: string,
//               public title: string,
//               public mintitle: string,
//               public unername: string,
//               public careerdirction: string,
//               public footerinfo: string) {
//   }

//   2.然后定义变量
//   private bloginfo: BlogInfo;
//   3.
//   在构造函数中 赋值初始值
//   constructor() {
//     // 在构造函数中进行赋值：
//     this.bloginfo = new BlogInfo('IBfPig', '大力的个人博客', 'angular的博客前台', '大力', '大力出奇迹', '版权信息');
//     this.menus = [
//       new Menu(1, 'Blog', './home'),
//       new Menu(2, 'AnClub', 'https://www.ngclub.cn')
