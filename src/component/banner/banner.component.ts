import {Component, ElementRef, HostBinding, OnInit} from '@angular/core';
import {ScrollDispatcher} from '@angular/cdk/overlay';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @HostBinding('style.backgroundImage') background = 'url(../../assets/image/all.jpg)';

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private el: ElementRef
  ) {
  }

  ngOnInit() {
    this.scrollDispatcher.ancestorScrolled(this.el).subscribe((e) => {
      console.log();
    });

  }

}
