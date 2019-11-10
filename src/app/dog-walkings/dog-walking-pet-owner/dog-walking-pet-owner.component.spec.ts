import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogWalkingPetOwnerComponent } from './dog-walking-pet-owner.component';

describe('DogWalkingPetOwnerComponent', () => {
  let component: DogWalkingPetOwnerComponent;
  let fixture: ComponentFixture<DogWalkingPetOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogWalkingPetOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogWalkingPetOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
