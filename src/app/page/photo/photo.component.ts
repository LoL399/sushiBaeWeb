import { sidemage } from './../../common/menu';
import { Component, OnInit } from '@angular/core';
import { comboArray, menuArray, promotion } from 'src/app/common/menu';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  constructor() {}
  menu: any[] = [];
  expand: boolean = false;
  ngOnInit(): void {
    let temp: any[] = [...sidemage, ...promotion];
    for (let item of temp) {
      this.menu.push({
        path: `../../../assets/${item.place || 'sushi'}/${item.name}.jpg`,
      });
    }
  }
  toggle() {
    this.expand = !this.expand;
  }
}
