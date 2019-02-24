<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <h3>私が手がけたサイト一覧</h3>
    <ul>
      <li>
        <a href="https://in-sec.xyz" target="_blank" rel="noopener">日本一ギャグセン半端ないエンジニアブログ</a>
      </li>
    </ul>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop()
  private msg: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
