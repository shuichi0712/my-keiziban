<template>
    <div class="bord-input">
        <h2>Todo Input </h2>
        <input type="text" @keyup.enter="addTodoText">
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export default class TodoListAdd extends Vue {

    public addTodoText(e) {
        this.$store.dispatch("addTodo", { text: e.target.value });
    }
}
</script>
<style scoped>
.bord-input {
    margin: 0 auto;
}
</style>

