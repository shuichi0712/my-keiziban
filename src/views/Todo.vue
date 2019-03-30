<template>
  <div>
    <TodoListAdd></TodoListAdd>
    <TodoList></TodoList>
    <DoneList></DoneList>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoListAdd from '@/components/TodoListAdd.vue';
import TodoList from '@/components/TodoList.vue';
import DoneList from '@/components/DoneList.vue';
import store from '@/stores/toDo';

@Component({
  components: {
    TodoListAdd,
    TodoList,
    DoneList
  },
})
export default class Todo extends Vue {

}

</script>