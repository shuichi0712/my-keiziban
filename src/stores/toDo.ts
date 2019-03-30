import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export interface State {
  todos: string[];
  dones: string[];
}
// 状態管理用state
export const state: State = ({ todos: [], dones: [] } as State);


// 値の取得
export const getters = {
  todos: () => state.todos,
  dones: () => state.dones,
};

export const actions = {
  addTodoText({ commit }, text) {
    commit(ADD_TODO_TEXT, text);
  },
  doneTodoText({ commit }, id) {
    commit(DONE_TODO_TEXT, id);
  },
  resetTodoText({ commit }, id) {
    commit(RESET_TODO_TEXT, id);
  },
};
export const ADD_TODO_TEXT = "ADD_TODO_TEXT";
export const DONE_TODO_TEXT = "DONE_TODO_TEXT";
export const RESET_TODO_TEXT = "RESET_TODO_TEXT";

// 状態の変化
export const mutations = {
  [ADD_TODO_TEXT](state, text) {
    const todo = {
      id: 0,
      text
    };
    if (state.todos.length !== 0) {
      todo.id = state.todos[state.todos.length - 1].id + 1;
    }
    state.todos.push(todo);
  },
  [DONE_TODO_TEXT](state, id) {
    for (let i = 0; i < state.todos.length; i++) {
      if (state.todos[i].id === id) {
        state.dones.push(state.todos[i]);
        state.todos.splice(i, 1);
        break;
      }
    }
  },
  [RESET_TODO_TEXT](state, id) {
    let todo = {};
    for (let i = 0; i < state.dones.length; i++) {
      if (state.dones[i].id === id) {
        todo = state.dones[i];
        state.dones.splice(i, 1);
        break;
      }
    }
    state.todos.push(todo);
    state.todos.sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
