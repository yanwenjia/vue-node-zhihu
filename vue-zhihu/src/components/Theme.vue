<template>
  <div class="box">
    <v-scroll :showFooter="false">
      <div class="img">
        <img :src="pagedata.image" alt="">
        <div class="description">{{pagedata.description}}</div>
      </div>
      <div class="editors">
        <div class="text">主编</div>
        <div class="editor" v-for="(e,k) in pagedata.editors" :key="k">
          <img :src="e.avatar" alt="">
        </div>
      </div>
      <div class="main">
        <ul>
          <li v-for="(v, i) in pagedata.stories" :key="i" @click="toDetail(v.id)">
            <div class="left" v-bind:style="{'width':v.images ? '65%':'100%'}">{{v.title}}</div>
            <div class="right" v-if="v.images">
              <img :src="v.images" alt="">
            </div>
          </li>
        </ul>
      </div>
    </v-scroll>
  </div>

</template>
<script>
  import Scroll from '@/components/Scroll';
  export default {
    data () {
      return {
        pagedata: {},
        routerId: '',
      }
    },
    methods: {
      toDetail (id) {
        this.$router.push({
          name: 'detail',
          params: {
            id: id
          }
        })
        this.setHeader()
      },
      show () {
        this.$refs.typelist.TypeFlag = true;
      },
      setHeader () {
        this.$store.state.titleName = ''
      },
      getData() {
        this.$axios.get('zhihuAPI',{
            params: {
                url: '/api/4/theme/' + this.routerId
            }
        }).then((res) => {
          this.pagedata = res.data
        })
      }
    },
    created () {
      this.routerId = this.$route.params.id;
      this.getData()
    },
    watch: {
      '$route.params.id'  (val, oldVal)  {
        this.routerId = val
        this.getData()
      },
    },
    components: {
      'v-scroll': Scroll,
    }
  }


</script>
<style scoped>
  .img {
    height: 200px;
    position: relative;
  }

  .img img {
    height: 200px;
    width: 100%;
  }

  .description {
    position: absolute;
    left: 15px;
    bottom: 30px;
    color: white;
    font-size: 16px;
  }

  .editors {
    height: 50px;
    overflow: hidden;
    padding-left: 10px;
  }

  .editors > div {
    float: left;
  }

  .text {
    line-height: 50px;
  }

  .editor {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    margin: 10px;
    text-align: center;
    overflow: hidden;
  }

  .editor img {
    width: 100%;
    height: 100%;
  }

  .editor:nth-child(2) {
    margin-left: 20px;
  }

  .main {
    padding: 0 10px;
    background-color: #eee;
  }

  ul > li {
    background-color: white;
    overflow: hidden;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 4px;
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

  .right img {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
</style>
