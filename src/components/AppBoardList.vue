<template>
    <div class="bord-list">
        <li>{{name}} {{date}}</br>{{message}}</li>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export default class AppTextArea extends Vue {
    @Prop({})
    public name!: string;
    @Prop({})
    public date!: string;
    @Prop({})
    public message!: string;



}
</script>
<style scoped>

</style>

