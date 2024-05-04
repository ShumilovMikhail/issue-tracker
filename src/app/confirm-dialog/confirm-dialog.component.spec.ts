import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConfirmDialogComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    component.issueNo = 3
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('method onAgree should emit true and write null in issueNo', () => {
    const event = spyOn(component.confirm, 'emit');
    component.onAgree();
    expect(event).toHaveBeenCalledWith(true);
    expect(component.issueNo).toBeNull()
  });

  it('method onDisagree should emit false and write null in issueNo', () => {
    const event = spyOn(component.confirm, 'emit');
    component.onDisagree();
    expect(event).toHaveBeenCalledWith(false);
    expect(component.issueNo).toBeNull()
  });

  it('if the issueNo is not equal to null, it should display a modal', () => {
    const modalElement = fixture.debugElement.query(By.css('clr-modal'));
    expect(modalElement).not.toBeNull()
  });

  it('if the issueNo is  equal to null, it should not display a modal', () => {
    component.issueNo = null;
    fixture.detectChanges();
    const modalElement = fixture.debugElement.query(By.css('.open'));
    expect(modalElement).toBeNull()
  });

});
