<template>
    <div class="bord-list">
        <li>{{name}} {{date}}</br>{{message}}</li>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export default class AppTextArea extends Vue {

    get name() {
        return "test"
    }
    get date() {
        return new Date();
    }
    get message() {
        return "test";
    }
}
</script>
<style scoped>

</style>

