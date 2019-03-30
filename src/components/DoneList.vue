<template>
    <div>
        <h3>Done List</h3>
        <ul>
            <li v-for="done in dones" :key="done.id">
                <p>ID:{{done.id}}</p>
                <p>Text:{{done.text}}</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import store from "@/stores/toDo";

@Component
export default class DoneList extends Vue {
    get dones() {
        return store.getters.dones;
    }
}
</script>
