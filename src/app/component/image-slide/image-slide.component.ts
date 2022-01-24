import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.scss'],
})
export class ImageSlideComponent implements OnInit {
  constructor() {}

  images: any;
  input: string = '';
  ngOnInit(): void {
    this.images = [
      {
        path: '../../../assets/special/2x16mcx.jpg',
      },
      {
        path: '../../../assets/special/2x28mcx.jpg',
      },
      {
        path: '../../../assets/special/fujiroll.jpg',
      },
      {
        path: '../../../assets/special/combo1.jpg',
      },

      {
        path: '../../../assets/special/combo4.jpg',
      },

      {
        path: '../../../assets/special/combo2.jpg',
      },

      {
        path: '../../../assets/special/combo3.jpg',
      },


    ];
  }
}
