import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

@Input() title: string;
@Input() content: string;
@Input() loveIts = 0;
@Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    this.loveIts += 1;
  }

  onDislove() {
    this.loveIts -= 1;
  }
}
