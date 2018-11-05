<template>
  <div class="about container">
    <h1 class="header">This is an about page</h1>
    <div class="card">
      <div class="card-content">
        카드 컨텐트 {{$store.state.message}}
        왜 에디터가 보이죠?
      </div>
      <input type="text" v-on:keyup='update($event.target)'/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  public update({value}: HTMLInputElement): void {
      this.$store.commit('update', value);
  }
}

</script>
