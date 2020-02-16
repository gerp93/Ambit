import { AmbitNavigationComponent } from './navigation/ambit-navigation/ambit-navigation.component';
import { AmbitNavigationModule } from './navigation/ambit-navigation/ambit-navigation.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ambit';
  showNav: boolean = false;

  toggleNav() {
    this.showNav = !this.showNav;
  }

}

