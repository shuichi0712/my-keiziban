<template>
  <div>
      <AppCreateButton/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppCreateButton from '@/components/AppCreateButton.vue';

@Component({
  components: {
    AppCreateButton,
  },
})
export default class Todo extends Vue {

}
</script>