import Vue from 'vue';
import Vuex from 'vuex';
// import { mapActions } from 'vuex'

Vue.use(Vuex);
export interface State {
  comments: string[],
  text: string,
}
// 状態管理用state
export const state: State = ({ comments: [], text: "" } as State);


// 値の取得
export const getters = {
  comments: (state: State) => state.comments,
};

export const actions = {
  setComment({ commit }, val) {
    commit(SET_COMMENT, val);
  },
  addTodo({ commit }, text) {
    commit(SET_TEXT, text);
  }
};
export const SET_COMMENT = "SET_COMMENT";
export const SET_TEXT = "SET_TEXT";

// 状態の変化
export const mutations = {
  [SET_COMMENT](state, comment) {
    state.comments.push(comment);
  },
  [SET_TEXT](state, text) {
    state.text = text;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
