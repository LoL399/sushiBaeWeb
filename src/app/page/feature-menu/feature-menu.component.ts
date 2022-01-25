import { comboArray, promotion } from './../../common/menu';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { menuArray } from 'src/app/common/menu';

@Component({
  selector: 'app-feature-menu',
  templateUrl: './feature-menu.component.html',
  styleUrls: ['./feature-menu.component.scss'],
})
export class FeatureMenuComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}
  currentMenu: Menu = Menu.PROMO;
  menuList: any = Menu;
  menu: any = promotion;
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
  ngOnInit(): void {}
  setMenu(flg: Menu) {
    this.currentMenu = flg;
    switch (flg) {
      case Menu.FEATURE:
        this.menu = menuArray;
        break;
      case Menu.COMBO:
        this.menu = comboArray;
        break;
      case Menu.PROMO:
        this.menu = promotion;
        break;
    }
  }
}

enum Menu {
  FEATURE,
  PROMO,
  COMBO,
}
