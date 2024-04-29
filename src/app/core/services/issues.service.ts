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
};
