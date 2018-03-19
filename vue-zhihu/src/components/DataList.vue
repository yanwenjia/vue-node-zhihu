<template>
  <div class="main">
    <div class="title">今日热闻</div>
    <ul>
      <li v-for="(v, i) in datalist" :key="i">
        <div class="left">{{v.title}}</div>
        <div class="right">
          <img :src="v.images[0]" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  // swiper options example:
  export default {
      data () {
        return {
            datalist: []
        }
      },
    created () {
      this.$axios.get('/api/4/news/latest').then((res)=>{
        this.datalist = res.data.stories
      })
    }
  }
</script>
<style scoped>
  .main {
    padding: 0 10px;
    background-color: #eee;
  }

  .title {
    text-align: left;
    height: 50px;
    line-height: 50px;
    color: #aaa;
    padding-left: 10px;
  }

  li {
    background-color: white;
    overflow: hidden;
    padding: 15px;
    margin-bottom: 10px;
  }

  .left {
    float: left;
    width: 65%;
  }
  .right {
    width: 35%;
    float: right;
    height: 80px;
    text-align: right;
  }
  img {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
</style>
