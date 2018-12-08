import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {

  constructor() { }

  getGuestbook(id: number) {
    return [
      new Guestbook(1, '留言1', 'asd', 'asd'),
      new Guestbook(2, '留言2', 'asd', 'asd'),
      new Guestbook(3, '留言3', 'asd', 'asd'),
      new Guestbook(4, '留言4', 'asd', 'asd'),
    ];
  }

  postGuestbook(articleid: number, info: any) {
    return;
  }
}

export class Guestbook {
  constructor(public articleid: number,
              public username: string,
              public useremail: string,
              public content: string) {
  }
}
