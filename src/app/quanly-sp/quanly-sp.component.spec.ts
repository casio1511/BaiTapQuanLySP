import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlySpComponent } from './quanly-sp.component';

describe('QuanlySpComponent', () => {
  let component: QuanlySpComponent;
  let fixture: ComponentFixture<QuanlySpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlySpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlySpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
