import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerDogWalkingTodoComponent } from './dog-walking-todo.component';

describe('DogWalkingComponent', () => {
  let component: WalkerDogWalkingTodoComponent;
  let fixture: ComponentFixture<WalkerDogWalkingTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WalkerDogWalkingTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerDogWalkingTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
