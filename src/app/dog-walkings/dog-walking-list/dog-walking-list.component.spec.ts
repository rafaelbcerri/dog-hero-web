import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogWalkingListComponent } from './dog-walking-list.component';

describe('DogWalkingListComponent', () => {
  let component: DogWalkingListComponent;
  let fixture: ComponentFixture<DogWalkingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogWalkingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogWalkingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
