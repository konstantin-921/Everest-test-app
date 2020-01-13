import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthActivityComponent } from './fourth-activity.component';

describe('FourthActivityComponent', () => {
  let component: FourthActivityComponent;
  let fixture: ComponentFixture<FourthActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
