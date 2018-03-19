<template>
  <div class="box" v-show="TypeFlag">
    <div class="content">
      <div class="header">
        <div class="logo">请登陆</div>
        <div class="down">我的收藏   离线下载</div>
      </div>
      <div class="index" @click="HideTypeList('首页')">
        <router-link tag="div" class="tab-item" to="/index">
          <span class="tab-link">首页</span>
        </router-link>
      </div>
      <ul>
        <li v-for="(e,i) in typelist" :key="i" @click="HideTypeList(e.name)">
          <router-link tag="div" class="tab-item" :to="{ name: 'theme', params: { id: e.id }}">
            <span class="tab-link">{{e.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="mask" @click="HideTypeList"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        typelist: [],
        TypeFlag: false
      }
    },
    created () {
      this.$axios.get('zhihuAPI', {
          params: {
              url: '/api/4/themes'
          }
      }).then((res) => {
        this.typelist = res.data.others
      })
    },
    methods: {
      HideTypeList (value) {
        this.TypeFlag = false
        this.$emit('close', this.TypeFlag)
        this.$store.state.titleName = value
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
  }

  .content {
    width: 80%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: white;
    z-index: 10;
    overflow-y: scroll;
    box-sizing: border-box;
  }

  .mask {
    width: 20%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
  }

  li {
    line-height: 40px;
    /*padding-left: 15px;*/
  }

  .tab-link {
    padding-left: 15px;
  }

  .header {
    background-color: #007aff;
    color: #fff;
  }

  .index {
    line-height: 50px;
    padding-left: 15px;
    color: #007aff;
  }

  .down {
    line-height: 50px;
    padding-left: 15px;
  }

  .logo {
    line-height: 50px;
    padding-left: 15px;
  }

  li .router-link-active {
    background-color: #eee;
  }
</style>
