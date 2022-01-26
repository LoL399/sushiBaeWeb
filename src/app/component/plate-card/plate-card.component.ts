import { nameFormat } from './../../common/menu';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plate-card',
  templateUrl: './plate-card.component.html',
  styleUrls: ['./plate-card.component.scss'],
})
export class PlateCardComponent implements OnInit {
  @Input() sushiplate: Plate = new Plate();
  src: string = '';
  constructor() {}
  observer: any;
  nameFormat = nameFormat;
  ngOnInit(): void {
    this.src = `../../../assets/${this.sushiplate?.place || 'sushi'}/${
      this.sushiplate?.name || ''
    }.jpg`;
  }
}

class Plate {
  public img?: string;
  public name?: string;
  public price?: string;
  public place?: string;
}
