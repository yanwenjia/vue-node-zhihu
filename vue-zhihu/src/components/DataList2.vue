<template>
  <div class="box">
    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" ref="scroll" @scroll="getTopTitle2">
      <keep-alive>
        <slider></slider>
      </keep-alive>
      <div class="main">
        <ul>
          <li class="title">今日热闻</li>
          <li v-for="(v, i) in listdata" :key="i" @click="setHeader">
            <!--:to="{ name: 'detail', params: { id: e.id }}"-->
            <router-link tag="div" class="tab-item" :to="{ name: 'detail', params: { id: v.id }}">
              <div class="left">{{v.title}}</div>
              <div class="right">
                <img :src="v.images[0]" alt="">
              </div>
              <div class="clearfix"></div>
            </router-link>
          </li>
        </ul>
        <ul v-for="(s, k) in downdata" :key="k">
          <li class="title">
            <!--{{s.date.slice(4, 6)}}月{{s.date.slice(6, 8)}}日 -->
            {{s.week}}</li>
          <li v-for="(d, h) in s.stories" @click="toDetail(d.id)">
            <div class="left">{{d.title}}</div>
            <div class="right">
              <img :src="d.images[0]" alt="">
            </div>
          </li>
        </ul>
      </div>
    </v-scroll>
  </div>
</template>
<script>
  import Scroll from '@/components/Scroll';
  import Slider from '@/components/Slider'
  export default{
    data () {
      return {
        listdata: [], // 下拉更新数据存放数组
        downdata: [],  // 上拉更多的数据存放数组
        timestamp: new Date().getTime()
      }
    },
    created: function () {
      this.getList();
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
      setHeader () {
        this.$store.state.titleName = ''
      },
        getTopTitle () {
          console.log(this.$el.children[0].scrollTop)
        },
      getTopTitle2 () {
        let scrolltop = this.$refs.scroll.scrolltop - 200
        let listdataHeight = this.listdata.length * 120 + 50
        let downdataHeight = 120 * 16 + 50
        let titleIndex
        let titleName
        if (-200 < scrolltop &&  scrolltop <= 0) {
          titleName = '首页'
        } else if (0 < scrolltop && scrolltop <= listdataHeight) {
          titleIndex = 0
          titleName = '今日热闻'
        } else if (listdataHeight < scrolltop) {
          titleIndex = Math.ceil((scrolltop - listdataHeight)/downdataHeight)
          titleName = this.downdata[titleIndex - 1].week
        }
        this.$store.state.titleName = titleName
      },
      getUrlDate (timestamp) {
        var dateUrl;
        var date = new Date(timestamp)
        var year = date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear().toString()
        var month = (Number(date.getMonth()) + 1) >= 10 ? (Number(date.getMonth()) + 1).toString() : '0' + (Number(date.getMonth()) + 1)
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate().toString()
        dateUrl = year + month + day
        return dateUrl
      },
      getWeek (datestring) {
        var week
        var year = datestring.slice(0, 4)
        var month = datestring.slice(4, 6)
        var day = datestring.slice(6, 8)
        var newDate = new Date(year, month, day)
        var newDateMonth = newDate.getMonth()
        var shouldMonth = newDateMonth - 1
        newDate.setMonth(shouldMonth)
        switch (newDate.getDay()) {
          case 0:
            week = '星期日'
            break
          case 1:
            week = '星期一'
            break
          case 2:
            week = '星期二'
            break
          case 3:
            week = '星期三'
            break
          case 4:
            week = '星期四'
            break
          case 5:
            week = '星期五'
            break
          case 6:
            week = '星期六'
            break
          default:
            week = '没有'
            break
        }
        return month + '月' + day + '日 ' + week
      },
      getList () {
        this.$axios.get('/zhihuAPI',{
            params: {
                url: '/api/4/news/latest'
            }
          }
        ).then((response) => {
            console.log(response.data)
          this.listdata = response.data.stories
        }, (response) => {
          console.log('error');
        });
      },
      onRefresh(done) {
        this.getList();

        done() // call done

      },
      onInfinite(done) {
        let vm = this;
        var dateurl = this.getUrlDate(this.timestamp)
        var url = '/api/4/news/before/' + dateurl
        this.$axios.get('/zhihuAPI',{
            params: {
                url: url
            }
        }).then((response) => {
          response.data.week = this.getWeek(response.data.date)
          this.titleName = this.getWeek(response.data.date)
          this.downdata.push(response.data)
          this.timestamp -= 86400000
          done() // call done
        }, (response) => {
          console.log('error');
        });
      }
    },
    components: {
      'v-scroll': Scroll,
      Slider
    }
  }
</script>
<style scoped>
  .main {
    padding: 0 10px;
    background-color: #eee;
  }

  li.title {
    text-align: left;
    height: 50px;
    line-height: 50px;
    color: #aaa;
    padding: 0;
    padding-left: 10px;
    background-color: #eee;
  }

  ul>li:not(:first-child) {
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
  .box{
    height: 0;
  }
</style>
