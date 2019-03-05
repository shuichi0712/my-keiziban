<template>
  <div>
    <AppCreateButton @createSingleTask="bordlists" />
    <AppBoardList/>{{ list }}
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppCreateButton from '@/components/AppCreateButton.vue';
import AppBoardList from '@/components/AppBoardList.vue';
import { Getter, namespace } from 'vuex-class';
import store from '@/store/toDo';

const todoModule = namespace("store/store");

@Component({
  components: {
    AppCreateButton,
    AppBoardList,
  },
})
export default class Todo extends Vue {
  public list = [{ id: 1, name: "test", message: "testdayo", date: new Date() }, { id: 2, name: "test", message: "testdayo", date: new Date() }, { id: 3, name: "test", message: "testdayo", date: new Date() }];

  public bordlists() {
    store.commit('increment')
    console.log(store.state.count);
    this.list.push({ id: 1, name: "test", message: "testdayo", date: new Date() });
  }
}
</script>