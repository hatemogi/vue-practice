<template>
  <div class="about container">
    <h1 class="">This is an about page</h1>
    <div class="card">
      <div class="card-content" v-on:click="update()">
        카드 컨텐트 {{$store.state.message}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  
export default class About extends Vue {
  update(): void {
    this.$store.commit('update', '커밋 메시지');
  }
}
</script>
