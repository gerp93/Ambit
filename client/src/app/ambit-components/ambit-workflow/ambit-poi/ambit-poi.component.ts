import { Component, OnInit } from '@angular/core';


export interface POI {
  searchQuery: string;
}

@Component({
  selector: 'app-ambit-poi',
  templateUrl: './ambit-poi.component.html',
  styleUrls: ['./ambit-poi.component.scss']
})
export class AmbitPoiComponent implements OnInit {


  suggestedPois: string[] = ['Grocery Store', 'Gas Station', 'Coffee Shop', 'Mall', 'Movie Theater', 'Restaurant', 'Car Wash', 'Liquor Store'];
  pois: string[] = [];
  private minimumPoiListLength: number = 5;

  constructor() { }

  ngOnInit(): void {
    this.addPoi_Quick(this.minimumPoiListLength);
  }

  addPoi(suggestedPoi?: string): void {
    this.pois.push(suggestedPoi);
  }

  private addPoi_Quick(newCount: number): void {
    let count: number = 0;
    while (count < newCount) {
      this.addPoi();
      count++;
    }
  }

  toggleSuggestedPoi(suggestedPoi: string): void {
    if (this.pois.includes(suggestedPoi)) {
      this.pois = this.pois.filter(item => item !== suggestedPoi);
      if (this.pois.length < this.minimumPoiListLength) {
        this.addPoi_Quick(this.minimumPoiListLength - this.pois.length);
      }
    } else {
      if (this.pois.includes(undefined)) {
        const index = this.pois.indexOf(undefined);
        this.pois[index] = suggestedPoi;
      } else {
        this.addPoi(suggestedPoi);
      }
    }
  }

}
