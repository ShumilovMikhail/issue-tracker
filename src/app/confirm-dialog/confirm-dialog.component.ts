import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'it-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
  @Input() issueNo: number | null = null;
  @Output() confirm = new EventEmitter<boolean>();

  onAgree() {
    this.confirm.emit(true);
    this.issueNo = null;
  };

  onDisagree() {
    this.confirm.emit(false);
    this.issueNo = null;
  };
};
