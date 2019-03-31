<template>
  <div id="discover">
    <van-tabbar
      v-model="active"
      active-color="#fff"
    >
      <van-tabbar-item to="/home">推荐</van-tabbar-item>
      <van-tabbar-item to="/home/friend">朋友</van-tabbar-item>
      <van-tabbar-item to="/home/radio">电台</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vant'
export default {
  name: 'Discover',
  data () {
    return {
      active: 0
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style scoped lang="less">
  #discover{
    .van-tabbar{
      background-color: #C20C0C;
      position: relative;
      top: -2px;
      height: 2.5em;
      color: #EB8D87;
      .van-tabbar-item{
        color: #EB8D87;
      }
    }
    [class*=van-hairline]::after{
      border:none;
    }
  }
</style>
