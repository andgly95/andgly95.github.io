import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortletBodyComponent } from './portlet-body.component';

describe('PortletBodyComponent', () => {
  let component: PortletBodyComponent;
  let fixture: ComponentFixture<PortletBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortletBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortletBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
