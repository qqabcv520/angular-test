import {Component, OnInit, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'mf-article-block',
  templateUrl: './article-block.component.html',
  styleUrls: ['./article-block.component.scss']
})
export class ArticleBlockComponent implements OnInit {

  isExpand = false;
  expandTimeoutHandle = null;
  foldTimeoutHandle = null;

  @Input() title: string;
  @Input() content: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  expand ($event: Event) {
    console.log('expand');
    console.log(this.isExpand)

    // 禁用滚动
    // document.documentElement.style.height = '100%';
    // document.documentElement.style.overflow = 'hidden';
    // document.body.style.height = '100%';
    // document.body.style.overflow = 'hidden';

    const domRect = this.el.nativeElement.getBoundingClientRect();
    const main = this.el.nativeElement.querySelector('.main');
    main.style.position = 'fixed';
    main.style.top = domRect.top + 'px';
    main.style.left = domRect.left + 'px';
    main.style.width = domRect.width + 'px';
    main.style.height = domRect.height + 'px';
    main.style.zIndex = '100';
    window.clearTimeout(this.foldTimeoutHandle);
    this.expandTimeoutHandle = window.setTimeout(() => {
      this.isExpand = true;
    }, 0);
  }

  fold ($event: Event) {
    $event.stopPropagation();
    this.isExpand = false;
    window.clearTimeout(this.foldTimeoutHandle);

    const domRect = this.el.nativeElement.getBoundingClientRect();
    const main = this.el.nativeElement.querySelector('.main');
    main.style.top = domRect.top + 'px';
    main.style.left = domRect.left + 'px';
    main.style.width = domRect.width + 'px';
    main.style.height = domRect.height + 'px';

    this.foldTimeoutHandle = window.setTimeout(() => {
      main.style.position = '';
      main.style.top = '';
      main.style.left = '';
      main.style.width = '';
      main.style.height = '100px';
      main.style.zIndex = '0';

      // 启用滚动
      // document.documentElement.style.height = '';
      // document.documentElement.style.overflow = '';
      // document.body.style.height = '';
      // document.body.style.overflow = '';
    }, 510);
  }

  clickWrapper ($event: Event) {
    if (!this.isExpand) {
      this.expand($event);
    }
  }
}
