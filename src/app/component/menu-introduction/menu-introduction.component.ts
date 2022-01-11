import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-introduction',
  templateUrl: './menu-introduction.component.html',
  styleUrls: ['./menu-introduction.component.scss'],
})
export class MenuIntroductionComponent implements OnInit {
  constructor() {}
  observer: any;
  ngOnInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        let plateArr = entry.target?.querySelectorAll('.plate') || null;
        plateArr.forEach((card) => {});
        plateArr.forEach((card) => {
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
    this.observer.observe(document.querySelector('.desk'));
  }
}
