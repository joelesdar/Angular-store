import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  img = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img') set changeImage(newImg: string) {
    this.img = newImg;
    // code
  }
  @Input() alt = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../assets/images/default.png';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // before render, once, not async
    console.log('constructor, ', 'imgValues => ', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before and during render, changes on inputs, several times
    console.log('ngOnChanges, ', 'imgValues => ', this.img);
    console.log('changes', changes);

  }

  ngOnInit(): void {
    // before render, async - fetch, once
    console.log('ngOnInit, ', 'imgValues => ', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');

    // }, 1000);
  }

  ngAfterViewInit(): void {
    // after render, handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
