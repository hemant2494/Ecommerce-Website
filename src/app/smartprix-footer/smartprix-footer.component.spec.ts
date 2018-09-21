import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartprixFooterComponent } from './smartprix-footer.component';

describe('SmartprixFooterComponent', () => {
  let component: SmartprixFooterComponent;
  let fixture: ComponentFixture<SmartprixFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartprixFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartprixFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
