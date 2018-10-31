import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {ScrollDispatcher} from '@angular/cdk/overlay';





@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public bannerHeight = 650;
  searchValue = '';
  displayHeight: number;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  // handle window scroll
  @HostListener('window:scroll', ['$event']) public windowScrolled($event: Event) {
    this.contentScroll($event);
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnInit() {
    this.displayHeight = this.bannerHeight - document.documentElement.scrollTop;


  }

  contentScroll($event: Event) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.displayHeight = this.bannerHeight - scrollTop;
    const distance = this.displayHeight / this.bannerHeight;
    console.log(distance);

  }

}
