import { Issue } from "../app/core/types/issue.interface";
import { IssueTypes } from "../app/core/types/issue.types";
import { IssuePriorityTypes } from "../app/core/types/issuePriority.types";

export const issues: Issue[] = [
  {
    issueNo: 1,
    title: 'Add email validation in registration form',
    description: 'Validate the email entered in the user registration form',
    priority: IssuePriorityTypes.HIGH,
    type: IssueTypes.FEATURE
  },
  {
    issueNo: 2,
    title: 'Display the adress details of a customer',
    description: 'Add a column to display the details of the customer address in the customer list',
    priority: IssuePriorityTypes.LOW,
    type: IssueTypes.FEATURE
  },
  {
    issueNo: 3,
    title: 'Export to CSV is not working',
    description: 'The export process of a report into CSV format throws an error',
    priority: IssuePriorityTypes.HIGH,
    type: IssueTypes.BUG
  },
  {
    issueNo: 4,
    title: 'Locale settings per user',
    description: 'Add settings configure the locale of the current user',
    priority: IssuePriorityTypes.LOW,
    type: IssueTypes.FEATURE
  },
  {
    issueNo: 5,
    title: 'Add new customer tutorial',
    description: 'Create a tutorial on how to add a new customer into the application',
    priority: IssuePriorityTypes.HIGH,
    type: IssueTypes.DOCUMENTATION
  },
];
