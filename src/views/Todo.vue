<template>
  <div>
    <TodoListAdd></TodoListAdd>
    <TodoList></TodoList>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoListAdd from '@/components/TodoListAdd.vue';
import TodoList from '@/components/TodoList.vue';
import { Getter, namespace } from 'vuex-class';
import store from '@/stores/toDo';
import { mapActions } from 'vuex';

const todoModule = namespace("stores/toDo");

@Component({
  components: {
    TodoListAdd,
    TodoList,
  },
})
export default class Todo extends Vue {
  get comment() {
    return this.$store.getters.comment;
  }
  set comment(value) {
    this.$store.dispatch("setComment", value);
  }
}

</script>