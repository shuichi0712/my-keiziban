<template>
    <div>
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
    public name!: string;

    @Prop({})
    public task!: string;

    public createSingleTask() {
        this.$emit('createSingleTask', this.name, this.task);
    }
}
</script>

