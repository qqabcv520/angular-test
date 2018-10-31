import {Component, OnInit, ElementRef, Input, HostBinding} from '@angular/core';

@Component({
  selector: 'app-article-block',
  templateUrl: './article-block.component.html',
  styleUrls: ['./article-block.component.scss']
})
export class ArticleBlockComponent implements OnInit {

  expandTimeoutHandle = null;
  foldTimeoutHandle = null;
  isAnimating = false;
  isExpanded = false;
  @Input() title: string;
  @Input() content: string;

  mainStyle = {
    top: '',
    left: '',
    width: '',
    height: '',
  };

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  expand () {
    this.isAnimating = true;
    const domRect = this.el.nativeElement.getBoundingClientRect();
    this.mainStyle.top = domRect.top + 'px';
    this.mainStyle.left = domRect.left + 'px';
    this.mainStyle.width = domRect.width + 'px';
    this.mainStyle.height = domRect.height + 'px';
    window.clearTimeout(this.expandTimeoutHandle);
    this.expandTimeoutHandle = window.setTimeout(() => {
      this.isExpanded = true;
    }, 0);
  }

  fold () {
    this.isExpanded = false;

    const domRect = this.el.nativeElement.getBoundingClientRect();
    this.mainStyle.top = domRect.top + 'px';
    this.mainStyle.left = domRect.left + 'px';
    this.mainStyle.width = domRect.width + 'px';
    this.mainStyle.height = domRect.height + 'px';

    window.clearTimeout(this.foldTimeoutHandle);
    this.foldTimeoutHandle = window.setTimeout(() => {
      this.mainStyle.top = '';
      this.mainStyle.left = '';
      this.mainStyle.width = '';
      this.mainStyle.height = '100px';
      this.isAnimating = false;
    }, 505);
  }

  clickWrapper ($event: Event) {
    if (!this.isAnimating) {
      this.expand();
    }
    $event.stopPropagation();
  }
  clickClose ($event: Event) {
    if (this.isAnimating) {
      this.fold();
      $event.stopPropagation();
    }
  }
}
