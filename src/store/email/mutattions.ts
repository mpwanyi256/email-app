// import { EmailStatus } from "@/types/enums";
import { EmailState } from "./types";

const addToSelectedEmails = (
    state: EmailState,
    EmailId: number
  ): void => {
    const selectedEmailIds = state.selectedEmails;
    // check if email is selected
    const idx = selectedEmailIds.findIndex(id => id === EmailId);
    if (idx >= 0) {
        // remove if exists
        state.selectedEmails.splice(idx, 1);
    } else {
        state.selectedEmails.push(EmailId);
    }
};

const selectAllEmails = (state: EmailState, selectAll: boolean) => {
    const allEmailIds = state.emails.map(e => e.id);
    state.selectedEmails = selectAll ? allEmailIds : [];
}

export default {
    addToSelectedEmails,
    selectAllEmails,
};
