import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sushiBae';

  theme = 0;

  themeChange() {
    if (this.theme >= 2) {
      this.theme = 0;
      return;
    }
    this.theme += 1;
  }
  classChange() {
    let cotainer = 'container ';
    switch (this.theme) {
      case 1:
        return cotainer + 'dark';
      case 2:
        return cotainer + 'blue';
    }
    return cotainer;
  }
}
