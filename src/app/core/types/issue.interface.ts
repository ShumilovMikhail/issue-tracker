import { IssueTypes } from "./issue.types"
import { IssuePriorityTypes } from "./issuePriority.types"

export interface Issue {
  issueNo: number
  title: string
  description: string
  priority: IssuePriorityTypes,
  type: IssueTypes
  completed?: Date
}
