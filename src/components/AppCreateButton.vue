<template>
    <div>
        タスク作成を押すと、console.logにcreateSingleTaskと表示されます。
        <button @click="createSingleTask">タスク作成</button>
    </div>

</template>
<script lang="ts">
import firebase from 'firebase';
import { Vue } from 'vue-property-decorator';

export default class AppCreateButton extends Vue {
public addTodoString: any;
public createSingleTask() {
   console.log("createSingleTask");
}

}
</script>

