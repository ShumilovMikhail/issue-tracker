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
  selectedIssue: Issue | null = null;

  ngOnInit(): void {
    this.getIssues();
  };

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  };

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issuesService.completeIssue(this.selectedIssue);
      this.getIssues();
    };
    this.selectedIssue = null;
  }

  private getIssues(): void {
    this.issues = this.issuesService.getPendingIssues();
  };
};
