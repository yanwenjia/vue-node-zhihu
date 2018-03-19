<template>
  <div class="box" >
    <div class="img" v-if="pagedata.image">
      <img :src="pagedata.image" alt="">
      <div class="title">{{pagedata.title}}</div>
    </div>
    <div class="content" v-html="pagedata.body"></div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
              pagedata: '',
              detailID: 0
            }
        },
      created () {
        this.detailID = this.$route.params.id
        this.getData()
      },
      methods: {
            getData () {
              let url = '/api/4/news/' + this.detailID
              this.$axios.get('zhihuAPI',{
                params: {
                  url: url
                }
              }).then((response) => {
                this.pagedata = response.data
              }).catch((err) => {
                console.log(err)
              })
            }
      }
    }
</script>
<style scoped>
  .img{
    position: absolute;
    top: 50px;
    left:0;
  }
  .img img{
    width: 100%;
    height: 200px;
  }
  .img .title{
    position: absolute;
    bottom: 20px;
    left: 15px;
    font-size: 20px;
    color: white;
  }
</style>
