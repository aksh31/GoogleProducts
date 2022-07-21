import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleProductsComponent } from './google-products.component';

describe('GoogleProductsComponent', () => {
  let component: GoogleProductsComponent;
  let fixture: ComponentFixture<GoogleProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
