import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdvertisementHomeComponent } from './product-advertisement-home.component';

describe('ProductAdvertisementHomeComponent', () => {
  let component: ProductAdvertisementHomeComponent;
  let fixture: ComponentFixture<ProductAdvertisementHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAdvertisementHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdvertisementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
