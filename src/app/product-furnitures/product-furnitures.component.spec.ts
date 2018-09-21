import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFurnituresComponent } from './product-furnitures.component';

describe('ProductFurnituresComponent', () => {
  let component: ProductFurnituresComponent;
  let fixture: ComponentFixture<ProductFurnituresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFurnituresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFurnituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
