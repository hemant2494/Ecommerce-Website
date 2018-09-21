import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMobilesComponent } from './product-mobiles.component';

describe('ProductMobilesComponent', () => {
  let component: ProductMobilesComponent;
  let fixture: ComponentFixture<ProductMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
