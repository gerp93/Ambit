import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ambit-domicile',
  templateUrl: './ambit-domicile.component.html',
  styleUrls: ['./ambit-domicile.component.scss']
})
export class AmbitDomicileComponent implements OnInit {
  displayCurrentAddress: boolean = false;

  newAddresses: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.newAddresses.push(0);
  }

  toggleCurrentAddress(): void {
    this.displayCurrentAddress = !this.displayCurrentAddress;
  }

  addAddress(): void {

    this.newAddresses.push(this.newAddresses.length + 1);
  }

  removeAddress(index: number): void {
    const value: any = this.newAddresses[index];
    this.newAddresses = this.newAddresses.filter(item => item !== value);
  }

}
