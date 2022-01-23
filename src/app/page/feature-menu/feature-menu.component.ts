import { comboArray } from './../../common/menu';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { menuArray } from 'src/app/common/menu';

@Component({
  selector: 'app-feature-menu',
  templateUrl: './feature-menu.component.html',
  styleUrls: ['./feature-menu.component.scss'],
})
export class FeatureMenuComponent implements OnInit {
  constructor() {}
  currentMenu: Menu = Menu.FEATURE;
  menuList: any = Menu;
  menu: any = menuArray;

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
    }
  }
}

enum Menu {
  FEATURE,
  DETAIL,
  COMBO,
}
