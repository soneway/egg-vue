<template>
    <div class="wrapper">
        <pi-card :dataList="dataList">
        </pi-card>
    </div>
</template>

<style lang="scss">
    @import "../style/common";

    .wrapper {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: hidden;
    }
</style>

<script>
  import PiCard from '../component/PiCard.vue';
  import request from '../script/request';

  export default {
    components: {
      PiCard
    },
    data() {
      return {
        dataList: [
          'https://soneway.github.io/jq/example/dist/img/1.jpg',
          'https://soneway.github.io/jq/example/dist/img/2.jpg',
          'https://soneway.github.io/jq/example/dist/img/3.jpg',
          'https://soneway.github.io/jq/example/dist/img/4.jpg',
          'https://soneway.github.io/jq/example/dist/img/5.jpg'
        ]
      };
    },
    mounted() {

    },
    methods: {}
  };
</script>
