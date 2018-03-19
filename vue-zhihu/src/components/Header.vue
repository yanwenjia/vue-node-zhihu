<template>
  <div class="header">
    <div class="menu" @click="showtypelist">
      <div class="top"></div>
      <div class="middle"></div>
      <div class="bottom"></div>
    </div>
    <div class="title">
      {{titleName}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopHeader',
    computed: {
      titleName () {
        return this.$store.state.titleName
      }
    },
    methods: {
      showtypelist () {
        this.$emit('showtypelist')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    width: 100%;
    height: 50px;
    background: #007aff;
    box-sizing: border-box;
    overflow: hidden;
  }

  .menu {
    width: 25px;
    height: 20px;
    position: relative;
    float: left;
    margin: 15px;
  }

  .menu > div {
    position: absolute;
    width: 25px;
    height: 4px;
    background-color: white;
    left: 0;
  }

  .top {
    top: 0;
  }

  .middle {
    top: 8px;
  }

  .bottom {
    bottom: 0;
  }

  .title {
    float: left;
    line-height: 50px;
    color: #fff;
    margin-left: 20px;
  }
</style>
