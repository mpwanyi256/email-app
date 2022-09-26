import { createStore } from "vuex";
import { emails } from "@/assets/data/emails";
import actions from "./email/actions";
import mutattions from "./email/mutattions";

export default createStore({
  state: {
    emails,
    selectedEmails: []
  },
  mutations: {
    ...mutattions,
  },
  actions: {
    ...actions,
  },
  modules: {},
  getters: {
    emails: (state) => state.emails,
    selectedEmailIds: (state) => state.selectedEmails,
  }
});
