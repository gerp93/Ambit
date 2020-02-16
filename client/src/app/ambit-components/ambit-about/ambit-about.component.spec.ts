import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitAboutComponent } from './ambit-about.component';

describe('AmbitAboutComponent', () => {
  let component: AmbitAboutComponent;
  let fixture: ComponentFixture<AmbitAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbitAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
