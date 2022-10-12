import { Component, OnInit } from '@angular/core';
import {
  faCar,
  faClock,
  faMapMarked,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrls: ['./contract-card.component.scss'],
})
export class ContractCardComponent implements OnInit {
  iconArr: any[] = [
    {
      icon: faClock,
      label: "Heures d'ouverture",
      detail: [
        'dimanche: 15h00–21h00',
        'lundi - mardi : 11h00–21h00',
        'mercredi - vendredi: 11h00–22h00',
        'samedi: 12h00–22h00',
      ],
    },
    {
      icon: faMapMarked,
      label: 'Adresse',
      detail: ['4910a rue WellingtonVerdun, Québec H4G 1X6'],
    },
    {
      icon: faCar,
      label: 'Livraison local gratuite',
      detail: [
        'Pour toutes commande de plus de 25$ av taxes en appelant directement au restaurant',
      ],
    },
    {
      icon: faPhone,
      label: 'Telephone',
      detail: ['438-387-3868'],
    },
  ];
  observer: any;
  constructor() {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        let cardArr = entry.target?.querySelectorAll('.contract-card') || null;
        cardArr.forEach((card) => {});
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
    this.observer.observe(document.querySelector('.contract-container'));
  }
}
