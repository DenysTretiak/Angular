
import { TasksInputComponent } from './tasks-input.component';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

describe('TasksInputComponent', () => {
  let component: TasksInputComponent;
  let fixture: ComponentFixture<TasksInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
