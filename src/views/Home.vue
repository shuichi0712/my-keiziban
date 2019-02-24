<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p>
      <button @click="nameGetArrayList">Get</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public ArrayTest = [{ id: 1, name: 'callen' }, { id: 2, name: 'Tom' }, { id: 3, name: 'ohn' }];

  /**
   * nameGetArrayList
   */
  public nameGetArrayList() {
    const list = this.ArrayTest.map((obj) => obj.name);
    // console.log('list');
  }

}
</script>
