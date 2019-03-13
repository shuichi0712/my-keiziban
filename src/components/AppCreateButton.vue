<template>
    <div>
        <input type="text" v-model="name">
        <textarea v-model="task" />
        <button @click="createSingleTask">
            タスク作成</button>
    </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class AppCreateButton extends Vue {
    @Prop({})
    public name: any;

    @Prop({})
    public task: any;

    public createSingleTask() {
        this.$emit('createSingleTask');
    }
}
</script>

