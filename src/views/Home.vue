<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" v-on:click='update'>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
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
  update() {
    console.log("업데이트 호출");
    this.$store.commit('update');
  }
}
</script>
