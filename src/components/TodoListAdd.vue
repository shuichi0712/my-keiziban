<template>
    <div class="bord-input">
        <h2>Todo Input </h2>
        <input type="text" @keyup.enter="addTodoText">
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import store from "@/stores/toDo";

@Component
export default class TodoListAdd extends Vue {
    public addTodoText(e) {
        store.dispatch("addTodoText", e.target.value);
        e.target.value = "";
    }
}
</script>
<style scoped>
.bord-input {
    margin: 0 auto;
}
</style>

