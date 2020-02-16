import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitWorkflowComponent } from './ambit-workflow.component';

describe('AmbitWorkflowComponent', () => {
  let component: AmbitWorkflowComponent;
  let fixture: ComponentFixture<AmbitWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbitWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
