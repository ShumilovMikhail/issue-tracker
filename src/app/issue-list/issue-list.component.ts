import { Component, OnInit, inject } from '@angular/core';

import { IssuesService } from '../core/services/issues.service';
import { Issue } from '../core/types/issue.interface';

@Component({
  selector: 'it-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit {
  private readonly issuesService = inject(IssuesService);
  issues: Issue[] = [];
  showReportIssue: boolean = false;

  ngOnInit(): void {
    this.getIssues();
  };

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  };

  private getIssues(): void {
    this.issues = this.issuesService.getPendingIssues();
  };
};
