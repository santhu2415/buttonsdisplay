import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavyblueComponent } from './navyblue.component';

describe('NavyblueComponent', () => {
  let component: NavyblueComponent;
  let fixture: ComponentFixture<NavyblueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavyblueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavyblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
