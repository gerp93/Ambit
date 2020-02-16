import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitDomicileComponent } from './ambit-domicile.component';

describe('AmbitDomicileComponent', () => {
  let component: AmbitDomicileComponent;
  let fixture: ComponentFixture<AmbitDomicileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbitDomicileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitDomicileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
