import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogWalkingSearchComponent } from './dog-walking-search.component';

describe('DogWalkingSearchComponent', () => {
  let component: DogWalkingSearchComponent;
  let fixture: ComponentFixture<DogWalkingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogWalkingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogWalkingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
