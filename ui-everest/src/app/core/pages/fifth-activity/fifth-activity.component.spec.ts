import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthActivityComponent } from './fifth-activity.component';

describe('FifthActivityComponent', () => {
  let component: FifthActivityComponent;
  let fixture: ComponentFixture<FifthActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
