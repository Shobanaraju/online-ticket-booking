import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusListViewComponent } from './bus-list-view.component';

describe('BusListViewComponent', () => {
  let component: BusListViewComponent;
  let fixture: ComponentFixture<BusListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusListViewComponent]
    });
    fixture = TestBed.createComponent(BusListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
