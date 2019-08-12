import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkscodeComponent } from './markscode.component';

describe('MarkscodeComponent', () => {
  let component: MarkscodeComponent;
  let fixture: ComponentFixture<MarkscodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkscodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
