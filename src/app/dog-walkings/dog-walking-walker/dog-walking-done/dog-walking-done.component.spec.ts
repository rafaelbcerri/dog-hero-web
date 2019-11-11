import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerDogWalkingDoneComponent } from './dog-walking-done.component';

describe('DogWalkingComponent', () => {
  let component: WalkerDogWalkingDoneComponent;
  let fixture: ComponentFixture<WalkerDogWalkingDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WalkerDogWalkingDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerDogWalkingDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
