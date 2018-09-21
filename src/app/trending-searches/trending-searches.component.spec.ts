import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingSearchesComponent } from './trending-searches.component';

describe('TrendingSearchesComponent', () => {
  let component: TrendingSearchesComponent;
  let fixture: ComponentFixture<TrendingSearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingSearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
