import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { ContentComponent } from './content/content.component';
import { ArticleComponent } from './content/article/article.component';
import { ArticleListComponent } from './content/article-list/article-list.component';
import { ArticleService } from './service/article.service';
import { GuestbookService } from './service/guestbook.service';
import { BlogInfoService } from './service/blog-info.service';

const routedConfig: Routes = [
  {path: '', redirectTo: 'blog', pathMatch: 'full'},
  {path: 'blog', component: ArticleListComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: '**', component: ArticleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiderbarComponent,
    ContentComponent,
    ArticleComponent,
    ArticleListComponent
  ],



  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routedConfig, { useHash: false })
  ],
  providers: [

    ArticleService,
    BlogInfoService,
    GuestbookService,
//     由于项目是一个单页项目，
//     实际的路由不是由前端页面进行控制而是由服务器的 Nginx 来控制，
//     所以需要一个锚点 引入
//     在providers:[]中引入：

// { provide: LocationStrategy, useClass: HashLocationStrategy, }



    { provide: LocationStrategy, useClass: HashLocationStrategy, }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


