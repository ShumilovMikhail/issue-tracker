import { Injectable } from '@angular/core';
import { Issue } from '../types/issue.interface';
import { issues } from '../../../assets/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private readonly issues: Issue[] = issues;

  constructor() { };

  public getPendingIssues(): Issue[] {
    return this.issues.filter((issue: Issue) => !issue.completed);
  };
};
