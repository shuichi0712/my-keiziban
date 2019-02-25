<template>
  <div>
    <AppCreateButton @createSingleTask="input" />
    <AppBoardList v-for="list in lists" :key="list.id" :name="list.name" :message="list.message" :date="list.date" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppCreateButton from '@/components/AppCreateButton.vue';
import AppBoardList from '@/components/AppBoardList.vue';

@Component({
  components: {
    AppCreateButton,
    AppBoardList,
  },
})
export default class Todo extends Vue {
  public input() {
    console.log("input");
  }
}
</script>