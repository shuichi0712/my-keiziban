<template>
    <div>
        <h3>
            Todo List</h3>
        <ul>
            <!-- <li v-for="todo in todos" :key="todo.id">
                    <p>ID:{{todo.id}}</p>
                    <p>Text:{{todo.text}}</p>
                </li> -->
        </ul>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export default class TodoList extends Vue {
    @Prop({ type: String, default: [{}] })
    public todos;
}
</script>
