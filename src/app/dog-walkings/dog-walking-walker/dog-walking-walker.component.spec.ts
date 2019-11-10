import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogWalkingWalkerComponent } from './dog-walking-walker.component';

describe('DogWalkingWalkerComponent', () => {
  let component: DogWalkingWalkerComponent;
  let fixture: ComponentFixture<DogWalkingWalkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogWalkingWalkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogWalkingWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
