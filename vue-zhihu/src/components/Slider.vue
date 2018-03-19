<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(v, i) in slider" :key="i" >
      <img :src="v.image" alt="" @click="toDetail(v.id)">
      <div class="title">{{v.title}}</div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  // swiper options example:
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          debugger: true,
          onTransitionStart(swiper){
            console.log(swiper)
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
//          navigation: {
//            nextEl: '.swiper-button-next',
//            prevEl: '.swiper-button-prev'
//          }
        },
        slider: []
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
//      console.log('this is current swiper instance object', this.swiper)
//      this.swiper.slideTo(3, 1000, false)
    },
    created () {
        this.$axios.get('/zhihuAPI',
          {
              params: {
                  url: '/api/4/news/latest'
              }
          }).then((res)=>{
          this.slider = res.data.top_stories
          console.log(this.slider)
        })
    },
    methods: {
      toDetail (id) {
          console.log('dddddd')
          this.$router.push({
            name: 'detail',
            params: {
                id: id
            }
          })
      }
    }
  }
</script>
<style scoped>
  .swiper-slide{
    height: 200px;
    position: relative;
  }
  .swiper-slide img{
    height: 200px;
    width: 100%;
  }
  .title{
    color: #fff;
    text-align: left;
    font-size:20px;
    position: absolute;
    left: 0;bottom: 30px;
    padding: 0 15px;
  }
</style>
