import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondActivityComponent } from './second-activity.component';

describe('SecondActivityComponent', () => {
  let component: SecondActivityComponent;
  let fixture: ComponentFixture<SecondActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
