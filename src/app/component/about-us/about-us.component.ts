import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  observer: any;
  ngOnInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        let cardArr =
          entry.target?.querySelectorAll('.about') || null;
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
    this.observer.observe(document.querySelector('.detail'));
  }

}
