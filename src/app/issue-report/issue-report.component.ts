import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { IssueForm } from './types/issue-form.interface';
import { IssuesService } from '../core/services/issues.service';
import { Issue } from '../core/types/issue.interface';

@Component({
  selector: 'it-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrl: './issue-report.component.css'
})
export class IssueReportComponent {
  @Output() formClose = new EventEmitter<void>();

  private readonly fb = inject(FormBuilder);
  private readonly issueService = inject(IssuesService);
  issueForm: FormGroup<IssueForm> = this.fb.group({
    title: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    priority: new FormControl('', { nonNullable: true }),
    type: new FormControl('', { nonNullable: true })
  });

  onSubmit(): void {
    this.issueService.createIssue(this.issueForm.getRawValue() as Issue);
    this.formClose.emit();
  };

};
