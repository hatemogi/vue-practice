<template>
  <div class="editor container">
    <h1 class="">에디터 붙이기</h1>
    <div id="editor123">
        여기에 에디터 보입시다.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Editor extends Vue {
    public data() {
        return {msg: 'hi there'};
    }
}

</script>
