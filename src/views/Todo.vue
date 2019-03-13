<template>
  <div>
    <textarea v-model="comment" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppCreateButton from '@/components/AppCreateButton.vue';
import { Getter, namespace } from 'vuex-class';
import store from '@/stores/toDo';

const todoModule = namespace("stores/toDo");

@Component({
  components: {
    AppCreateButton,

  },
})
export default class Todo extends Vue {
  @todoModule.Action('setComment')
  public setComment: any;

  get comment() {
    return store.getters.comment;
  }
  set comment(value) {
    this.setComment(value);
  }
}
</script>