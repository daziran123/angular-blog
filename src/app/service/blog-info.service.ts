
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogInfoService {
  private bloginfo: BlogInfo;
  private menus: Menu[];
  private myinfos: MyInfo[];

  constructor() {}

BlogInfo() {
  return  this.bloginfo = new BlogInfo('IBfPig', '大力的个人博客', 'angular的博客前台', '大力', '大力出奇迹', '版权信息');
}
Menu() {
  return this.menus = [
    new Menu(1, 'Blog', './home'),
    new Menu(2, 'AnClub', 'https://www.ngclub.cn')
  ];
}
// 在构造函数中进行赋值：
MyInfo() {
  return this.myinfos = [
  new MyInfo(1, 'Twitter', 'https://twitter.com/ibfpig', 'icon iconfont icon-twitter'),
  new MyInfo(2, 'Github', 'https://github.com/BfPig/', 'icon iconfont icon-github'),
  new MyInfo(3, 'Email', 'mailto:me@ibfpig.com', 'icon iconfont icon-email'),
];
}

}



  export class BlogInfo {
    constructor(public logo: string,
                public title: string,
                public mintitle: string,
                public username: string,
                public careerdirction: string,
                public footerinfo: string) {
    }
  }
// 构建一个 Menu 的类
  export class Menu {
  constructor(public id: number,
              public name: string,
              public link: string) {
  }
  }
// 构建一个 MyInfo 的类
export class MyInfo {
  constructor(public id: number,
              public name: string,
              public link: string,
              public ico: string) {
  }
}
