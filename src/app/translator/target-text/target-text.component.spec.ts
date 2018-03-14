import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetTextComponent } from './target-text.component';

describe('TargetTextComponent', () => {
  let component: TargetTextComponent;
  let fixture: ComponentFixture<TargetTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
