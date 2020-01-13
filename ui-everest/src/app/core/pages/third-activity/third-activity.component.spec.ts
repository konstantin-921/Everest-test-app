import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdActivityComponent } from './third-activity.component';

describe('ThirdActivityComponent', () => {
  let component: ThirdActivityComponent;
  let fixture: ComponentFixture<ThirdActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
