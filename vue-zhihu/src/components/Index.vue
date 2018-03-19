<template>
  <div>
    <data-list2 @titleName="setHeaderTitleName"></data-list2>
  </div>
</template>

<script>


  import DataList from '@/components/DataList'
  import DataList2 from '@/components/DataList2'
  import Test from '@/components/Test'

  export default {
    components: {
      DataList,
      DataList2,
      Test
    },
    methods: {
      setHeaderTitleName (name) {
        this.$refs.header.titleName = name
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
