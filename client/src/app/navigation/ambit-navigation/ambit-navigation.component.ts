import { AmbitModule } from './../../ambit-components/ambit.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambit-navigation',
  templateUrl: './ambit-navigation.component.html',
  styleUrls: ['./ambit-navigation.component.scss']
})
export class AmbitNavigationComponent implements OnInit {

  newAmbit: boolean = false;
  savedAmbits: boolean = false;
  about: boolean = false;

  condensed: boolean = false;
  collapsed: boolean = false;
  constructor() {

  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  ngOnInit(): void {
  }

  navigate(button: string): void {
    this.newAmbit = false;
    this.savedAmbits = false;
    this.about = false;

    if (button === 'new') {
      this.newAmbit = true;
    }

    if (button === 'saved') {
      this.savedAmbits = true;
    }

    if (button === 'about') {
      this.about = true;
    }
  }

  condense(): void {
    this.condensed = ! this.condensed;
  }

  collapse(): void {
    this.collapsed = !this.collapsed;
  }

}
