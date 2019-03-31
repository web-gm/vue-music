<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="#C20C0C">
      <van-swipe-item v-for="(image, index) in banners" :key="index">
        <img :src="image.imageUrl" />
        <p>{{image.name}}</p>
      </van-swipe-item>
    </van-swipe>
    <van-tabbar
      v-model="active"
      active-color="#fff"
    >
      <van-tabbar-item to="">
        <span>私人FM</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="icon.fmp" />
      </van-tabbar-item>
      <van-tabbar-item to="">
        <span>每日推荐</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="icon.dailyP" />
      </van-tabbar-item>
      <van-tabbar-item to="">
        <span>每日推荐</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="icon.playlistP" />
      </van-tabbar-item>
      <van-tabbar-item to="">
        <span>排行榜</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="icon.rankP" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Lazyload, Tabbar, TabbarItem } from 'vant'
import fmP from '../../assets/icon/t_dragonball_icn_fm.png'
import dailyP from '../../assets/icon/t_dragonball_icn_daily.png'
import playlistP from '../../assets/icon/t_dragonball_icn_playlist.png'
import rankP from '../../assets/icon/t_dragonball_icn_rank.png'
export default {
  name: 'Recommend',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: null,
      banners: [],
      icon: {
        fmP: fmP,
        dailyP: dailyP,
        playlistP: playlistP,
        rankP: rankP
      }
    }
  },
  mounted () {
    this.$api.banner({}).then(res => {
      console.log(res.data)
      this.banners = res.data.banners
    })
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/color";
  .van-swipe-item{
    img{
      width: 100%;
      border-radius: 5%;
    }
  }
  .van-tabbar-item{
    .van-tabbar-item__icon{
      background-color: @base-color;
      border-radius: 50%;
      padding: 2em;
    }
  }
</style>
