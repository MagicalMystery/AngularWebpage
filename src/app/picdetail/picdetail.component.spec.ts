import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicdetailComponent } from './picdetail.component';

describe('PicdetailComponent', () => {
  let component: PicdetailComponent;
  let fixture: ComponentFixture<PicdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
