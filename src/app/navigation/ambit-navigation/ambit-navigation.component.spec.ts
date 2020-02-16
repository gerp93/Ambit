import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitNavigationComponent } from './ambit-navigation.component';

describe('AmbitNavigationComponent', () => {
  let component: AmbitNavigationComponent;
  let fixture: ComponentFixture<AmbitNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbitNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
