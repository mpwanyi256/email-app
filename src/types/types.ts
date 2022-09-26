import { EmailStatus } from "./enums";

export interface Email {
  id: number;
  subject: string;
  message: string;
  status: EmailStatus;
}
