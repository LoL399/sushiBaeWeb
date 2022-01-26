import { Component, OnInit } from '@angular/core';
import { promotion } from 'src/app/common/menu';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  observer: any;
  promo = promotion;
  images = [
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
  ngOnInit(): void {

    this.observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        let cardArr =
          entry.target?.querySelectorAll('.plate-container') || null;
        // if (cardArr) {
        cardArr.forEach((card) => {
          if (entry.isIntersecting) {
            card.classList.add('animated');
            card.classList.add('animatedFadeInUp');
            card.classList.add('fadeInUp');
            return;
          }
          card.classList.remove('animated');
          card.classList.remove('animatedFadeInUp');
          card.classList.remove('fadeInUp');
        });
      });
    });
    this.observer.observe(document.querySelector('.dish-section'));
  }
}
