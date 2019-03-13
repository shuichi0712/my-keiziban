import Vue from 'vue';
import Vuex from 'vuex';
import { mapActions } from 'vuex'

Vue.use(Vuex);

// 状態管理用state
export const state: any = {
  comment: "test",
};


// 値の取得
export const getters = {
  comment: (state: any) => {
    return `${state.comment}`;
  },
};

export const actions = {
  setComment({ commit }, val: any) {
    commit(SET_COMMENT);
  },
};
export const SET_COMMENT = "SET_COMMENT";

// 状態の変化
export const mutations = {
  [SET_COMMENT](state: any, comment: any) {
    state.comment = comment;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
