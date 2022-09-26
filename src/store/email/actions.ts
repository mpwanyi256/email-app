import { Commit } from "vuex";

const addToSelectedEmail = ({ commit }: { commit: Commit },id: number): void => {
    commit('addToSelectedEmails', id);
}

const selectAll = ({ commit }: { commit: Commit }, selectAll: boolean): void => {
    commit('selectAllEmails', selectAll);
}

export default {
    addToSelectedEmail,
    selectAll
}