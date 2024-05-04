import { TestBed } from '@angular/core/testing';
import { IssuesService } from './issues.service';
import { Issue } from '../types/issue.interface';
import { IssuePriorityTypes } from '../types/issuePriority.types';
import { IssueTypes } from '../types/issue.types';
import { issues } from '../../../assets/mock-issues';

describe('IssueService', () => {
  let issueService: IssuesService;
  const fakeIssue: Issue = {
    issueNo: 15,
    title: 'Fake issue',
    description: 'Fake issue description',
    priority: IssuePriorityTypes.HIGH,
    type: IssueTypes.BUG,
  }
  beforeEach(async () => {
    issueService = TestBed.inject(IssuesService);
    issueService.createIssue(fakeIssue);
  });

  it('Should create', () => {
    expect(issueService).toBeDefined();
  });

  it('Should create issue', () => {
    expect(issueService['issues']).toContain(fakeIssue);
  });

  it('Should return pending issues', () => {
    expect(issueService.getPendingIssues()[0]).toBe(fakeIssue);
  });

  it('Should return suggestions', () => {
    const result = issueService.getSuggestions('Fake');
    expect(result).toContain(fakeIssue);
  });


});
