import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = 'Post-it';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Information : je vous conseille d\'utiliser Bootstrap pour cet exercice',
      loveIts: 1,
      created_at: new Date('01/05/1998 21:54')
    },
    {
      title: 'Mon deuxième post',
      content: 'Information : je vous conseille d\'utiliser Bootstrap pour cet exercice',
      loveIts: 0,
      created_at: new Date('01/05/2006 08:02')
    },
    {
      title: 'Mon troisième post',
      content: 'Information : je vous conseille d\'utiliser Bootstrap pour cet exercice',
      loveIts: -1,
      created_at: new Date('12/08/2009 12:05')
    }
  ];
}
