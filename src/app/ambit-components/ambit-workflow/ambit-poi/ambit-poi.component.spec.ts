import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitPoiComponent } from './ambit-poi.component';

describe('AmbitPoiComponent', () => {
  let component: AmbitPoiComponent;
  let fixture: ComponentFixture<AmbitPoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbitPoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitPoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
