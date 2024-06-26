import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { IssueForm } from './types/issue-form.interface';
import { IssuesService } from '../core/services/issues.service';
import { Issue } from '../core/types/issue.interface';

@Component({
  selector: 'it-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrl: './issue-report.component.css'
})
export class IssueReportComponent implements OnInit {
  @Output() formClose = new EventEmitter<void>();

  private readonly fb = inject(FormBuilder);
  private readonly issueService = inject(IssuesService);
  issueForm: FormGroup<IssueForm> = this.fb.group({
    title: new FormControl('', { nonNullable: true, validators: Validators.required }),
    description: new FormControl('', { nonNullable: true }),
    priority: new FormControl('', { nonNullable: true, validators: Validators.required }),
    type: new FormControl('', { nonNullable: true, validators: Validators.required })
  });
  suggestions: Issue[] = [];

  ngOnInit(): void {
    this.issueForm.controls.title.valueChanges.subscribe(title => {
      this.suggestions = this.issueService.getSuggestions(title);
    });
  };

  onSubmit(): void {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    };
    this.issueService.createIssue(this.issueForm.getRawValue() as Issue);
    this.formClose.emit();
  };

};
