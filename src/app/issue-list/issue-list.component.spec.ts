import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IssueListComponent } from './issue-list.component';
import { IssuesService } from '../core/services/issues.service';
import { Issue } from '../core/types/issue.interface';
import { IssueTypes } from '../core/types/issue.types';
import { IssuePriorityTypes } from '../core/types/issuePriority.types';
import { By } from '@angular/platform-browser';

describe('IssueListComponent', () => {
  let component: IssueListComponent;
  let fixture: ComponentFixture<IssueListComponent>;
  const fakeIssuesService = jasmine.createSpyObj('FakeIssuesService', ['getPendingIssues', 'completeIssue']);
  const fakePendingIssues: Issue[] = [
    {
      issueNo: 1,
      title: 'Add email validation in registration form',
      description: 'Validate the email entered in the user registration form',
      priority: IssuePriorityTypes.HIGH,
      type: IssueTypes.FEATURE
    },
    {
      issueNo: 2,
      title: 'Display the adress details of a customer',
      description: 'Add a column to display the details of the customer address in the customer list',
      priority: IssuePriorityTypes.LOW,
      type: IssueTypes.FEATURE
    },
    {
      issueNo: 3,
      title: 'Export to CSV is not working',
      description: 'The export process of a report into CSV format throws an error',
      priority: IssuePriorityTypes.HIGH,
      type: IssueTypes.BUG
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IssueListComponent
      ],
      providers: [
        { provide: IssuesService, useValue: fakeIssuesService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(IssueListComponent);
    component = fixture.componentInstance;
    fakeIssuesService.getPendingIssues.and.callFake(() => fakePendingIssues);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it('method onCloseReport should write false in showReportIssue', () => {
    component.showReportIssue = true;
    component.onCloseReport();
    expect(component.showReportIssue).not.toBeTrue();
  });

  it('if confirmed and selectedIssue is true,the method onConfirm should call completeIssue method', () => {
    const fakeIssue = fakePendingIssues[0];
    component.selectedIssue = fakeIssue;
    component.onConfirm(true);
    expect(fakeIssuesService.completeIssue).toHaveBeenCalledWith(fakeIssue);
  });

  it('the method onConfirm should write null in selectedIssue', () => {
    const fakeIssue = fakePendingIssues[0];
    component.selectedIssue = fakeIssue;
    component.onConfirm(false);
    expect(component.selectedIssue).toBeNull();
  });


  it("on click on the 'add new issue' button showReportIssue should be true", () => {
    const buttonElement = fixture.debugElement.query(By.css('.add-button'));
    buttonElement.nativeNode.click()
    expect(component.showReportIssue).toBeTrue();
  });

  it("if showReportIssue is false, it should display table", () => {
    component.showReportIssue = false;
    fixture.detectChanges();
    const tableElement = fixture.debugElement.query(By.css('clr-datagrid'));
    expect(tableElement).toBeTruthy();
  });

});
