import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';





@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public bannerHeight = 650;
  searchValue = '';
  displayHeight: number;
  toolbarHeight: number;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  bannerStyles: any = {
    title: {
      fontSize: 5,
    },
    backgroundOpacity: {
      opacity: 0,
    },
    imgClass: 'all-img'
  };
  toolbarTransparent: boolean;



  // handle window scroll
  @HostListener('window:scroll', ['$event']) public windowScrolled($event: Event) {
    this.contentScroll($event);
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnInit() {
    console.log(this.bannerStyles.imgClass);
    this.displayHeight = this.bannerHeight - document.documentElement.scrollTop;

    this.isHandset$.subscribe((res) => {
      this.toolbarHeight = res ? 55 : 64;
    });
  }

  contentScroll($event: Event) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.displayHeight = this.bannerHeight - scrollTop;

    const distance = (this.displayHeight - this.toolbarHeight) / this.bannerHeight;
    this.bannerStyles.title.fontSize = this.getRange(16, 63, this.getLerp(16, 63, distance)) + 'px';
    const left1 = this.getRange(0, 50, this.getLerp(0, 50, distance));
    const left2 = this.getRange(0, 55, this.getLerp(55, 0, distance));
    this.bannerStyles.title.left = `calc(${left1}% + ${left2}px)`;
    this.bannerStyles.title.transform = `translate(${this.getRange(-50, 0, this.getLerp(0, -50, distance))}%, -50%)`;
    this.bannerStyles.backgroundOpacity.opacity = this.getRange(0, 1, this.getLerp(1, -1, distance));
    this.toolbarTransparent = scrollTop < this.bannerHeight - this.toolbarHeight;
  }

  /**
   * 线性插值
   * @param start 起始值
   * @param end 终点值
   * @param progress 进度百分比（小数）
   * @return 插值结果，可能会超出范围
   */
  getLerp(start: number, end: number, progress: number): number {
    const difference = end - start;
    return difference * progress + start;
  }

  /**
   * 限制范围
   * @param min 左区间
   * @param max 左右区间
   * @param num 进度百分比，0 到 1 的小数
   * @return 限制范围，始终在 min 到 max 之间
   */
  getRange(min: number, max: number, num: number): number {
    const result = Math.max(min, num);
    return Math.min(max, result);
  }
}
