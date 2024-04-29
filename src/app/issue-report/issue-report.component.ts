import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IssueForm } from './types/issue-form.interface';

@Component({
  selector: 'it-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrl: './issue-report.component.css'
})
export class IssueReportComponent {
  private readonly fb = inject(FormBuilder);
  issueForm: FormGroup<IssueForm> = this.fb.group({
    title: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    priority: new FormControl('', { nonNullable: true }),
    type: new FormControl('', { nonNullable: true })
  });

}
