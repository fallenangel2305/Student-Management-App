import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeecodeComponent } from './feecode.component';

describe('FeecodeComponent', () => {
  let component: FeecodeComponent;
  let fixture: ComponentFixture<FeecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
