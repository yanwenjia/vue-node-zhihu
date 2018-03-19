<template>
  <div class="hello">
    <img src="../assets/hello.png" ref="helloImg">
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    mounted () {
      this.$refs.helloImg.style.height = window.innerHeight + 'px'
      this.$refs.helloImg.style.width = window.innerWidth + 'px'
      var that = this
      window.onresize = function () {
        that.$refs.helloImg.style.height = window.innerHeight + 'px'
        that.$refs.helloImg.style.width = window.innerWidth + 'px'
      }
      setTimeout(function () {
        that.$router.push({
          path: '/index'
        })
      }, 2000)
    },
    destroyed () {
      window.onresize = function () {
        return
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
