import { Injectable } from '@angular/core';
import { Issue } from '../types/issue.interface';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private readonly issues: Issue[] = [];

  constructor() { };

  public getPendingIssues(): Issue[] {
    return this.issues.filter((issue: Issue) => !issue.completed);
  };

  public createIssue(issue: Issue): void {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  };

  public completeIssue(issue: Issue): void {
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date()
    };
    const index = this.issues.findIndex(i => i === issue);
    this.issues[index] = selectedIssue;
  };

  public getSuggestions(title: string): Issue[] {
    if (title.length > 3) {
      return this.issues.filter(issue =>
        issue.title.indexOf(title) !== -1);
    }
    return [];
  };
};
