import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCategoryComponent } from './trending-category.component';

describe('TrendingCategoryComponent', () => {
  let component: TrendingCategoryComponent;
  let fixture: ComponentFixture<TrendingCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
