import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {

  images = [
    'assets/banner1.jpg',
    'assets/banner2.jpg',
  ];
  
  intervalId: any;
  currentIndex = 0;
  currentImage = this.images[this.currentIndex];

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }


}
