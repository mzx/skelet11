import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainingDialogComponent } from './chaining-dialog.component';

describe('ChainingDialogComponent', () => {
  let component: ChainingDialogComponent;
  let fixture: ComponentFixture<ChainingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
