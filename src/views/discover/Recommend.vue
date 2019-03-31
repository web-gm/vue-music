<template>
  <div id='recommend'>
  <!-- banner图 -->
    <van-swipe :autoplay="3000" indicator-color="#C20C0C">
      <van-swipe-item v-for="(image, index) in banners" :key="index">
        <img :src="image.imageUrl" />
        <p>{{image.name}}</p>
      </van-swipe-item>
    </van-swipe>
    <!-- 跳转 -->
    <van-tabbar
      v-model="active"
      active-color="#333333"
      :fixed=false
    >
      <van-tabbar-item to="">
        <span>私人FM</span>
        <div class="icon-wrap"
          slot="icon"
          slot-scope="props">
          <img :src="icon.fmP" />
        </div>
      </van-tabbar-item>
      <van-tabbar-item to="">
        <span>每日推荐</span>
        <div class="icon-wrap"
          slot="icon"
          slot-scope="props">
          <img :src="icon.dailyP" />
        </div>
      </van-tabbar-item>
      <van-tabbar-item to="">
        <span>歌单</span>
        <div class="icon-wrap"
          slot="icon"
          slot-scope="props">
          <img :src="icon.playlistP" />
        </div>
      </van-tabbar-item>
      <van-tabbar-item to="">
        <span>排行榜</span>
        <div class="icon-wrap"
          slot="icon"
          slot-scope="props">
        <img :src="icon.rankP" />
        </div>
      </van-tabbar-item>
    </van-tabbar>
    <!-- 推荐歌单 -->
    <Playlist
      :data=personalized
      title='推荐歌单'
      toAllText='歌单广场'
      imgKey='picUrl'
      countKey='playCount'
      desKey='name'>
    </Playlist>
    <Playlist
      :data=newalbum
      title='推荐新碟'
      toAllText='更多新碟'
      imgKey='picUrl'
      desKey='name'>
    </Playlist>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Lazyload, Tabbar, TabbarItem, Row, Col, Icon } from 'vant'
import fmP from '@/assets/icon/t_dragonball_icn_fm.png'
import dailyP from '@/assets/icon/t_dragonball_icn_daily.png'
import playlistP from '@/assets/icon/t_dragonball_icn_playlist.png'
import rankP from '@/assets/icon/t_dragonball_icn_rank.png'
import Playlist from '@/components/Playlist.vue'
export default {
  name: 'Recommend',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    Playlist: Playlist
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
      },
      personalized: [],
      newalbum: []
    }
  },
  mounted () {
    this.$api.banner({}).then(res => {
      this.banners = res.data.banners
    })
    this.$api.personalized({}).then(res => {
      this.personalized = res.data.result.slice(0, 6)
    })
    this.$api.newalbum({
      params: {
        offset: 0,
        limit: 6
      }
    }).then(res => {
      console.log(res.data)
      this.newalbum = res.data.albums
    })
  }
}
</script>
<style scoped lang="less">
  @import "../../assets/color";
  #recommend{
    .van-swipe{
      .van-swipe-item{
        img{
          width: 90%;
          border-radius: 5%;
          margin: 0 auto;
          display: block;
        }
      }
      .van-swipe__indicators{
        position: absolute;
        bottom: 25px;
        background-color: red
      }
    }
    .icon-wrap{
      background-color: @base-color;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .van-tabbar{
      position: static;
      height: auto;
      margin: 10px auto;
      .van-tabbar-item{
        .van-tabbar-item__text{
          span{
            color: #333333;
          }
        }
        .van-tabbar-item__icon{
          background-color: @base-color;
          border-radius: 50%;
          padding: 2em;
          img{
            width: 10vw;
            height: 10vw;
          }
        }
      }
    }
  }
</style>
