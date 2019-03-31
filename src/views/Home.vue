<template>
  <div>
    <van-nav-bar
      class="nav-bar"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-tabbar v-model="active" slot="title">
        <van-tabbar-item  to="/home/music">
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[1].active : icon[1].normal"
          >
        </van-tabbar-item>
        <van-tabbar-item to="/home">
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[0].active : icon[0].normal"
          >
        </van-tabbar-item>
        <van-tabbar-item  to="/home/video">
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[2].active : icon[2].normal"
          >
        </van-tabbar-item>
      </van-tabbar>
      <van-icon class="icon" name="wap-nav" slot="left" />
      <van-icon class="icon" name="search" slot="right" />
    </van-nav-bar>
    <router-view/>
  </div>
</template>

<script>
import {NavBar, Toast, Icon, Tabbar, TabbarItem} from 'vant'
import DiscoverN from '../assets/icon/t_actionbar_discover_normal.png'
import DiscoverS from '../assets/icon/t_actionbar_discover_selected.png'
import MusicN from '../assets/icon/t_actionbar_music_normal.png'
import MusicS from '../assets/icon/t_actionbar_music_selected.png'
import VideoN from '../assets/icon/t_actionbar_video_normal.png'
import VideoS from '../assets/icon/t_actionbar_video_selected.png'

export default {
  name: 'Home',
  data () {
    return {
      name: '0',
      active: 1,
      icon: [
        {
          normal: DiscoverN,
          active: DiscoverS
        },
        {
          normal: MusicN,
          active: MusicS
        },
        {
          normal: VideoN,
          active: VideoS
        }
      ]
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>

<style scoped lang="less">
  @import '../assets/color.less';
  .nav-bar{
    background-color: @base-color;
    .icon{
      color: #fff;
      font-size: 2em;
    }
    .van-tabbar{
      position: relative;
      background-color: @base-color;
      width: 50%;
      margin: 0 25%;
    }
    .van-tabbar-item__icon img{
      width: 2.5em;
      height: auto;
    }
    .van-nav-bar__title{
      height: 100%;
    }
  }
</style>
