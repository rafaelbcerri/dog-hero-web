import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogWalkingComponent } from './dog-walking.component';

describe('DogWalkingComponent', () => {
  let component: DogWalkingComponent;
  let fixture: ComponentFixture<DogWalkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogWalkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogWalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
