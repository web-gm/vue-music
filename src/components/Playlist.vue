<template>
  <div class="playlist__component">
      <div class="playlist__header">
        <span class="playlist__title">{{title}}</span>
        <button class="playlist__toAll">{{toAllText}}</button>
      </div>
      <div class="playlist__row">
        <div class="playlist__col" v-for="(playItem, index) in data" :key="index">
          <div class="img-wrap">
            <img :src="playItem[imgKey]" alt="">
            <span class="play-num" v-if="countKey"><van-icon name="play-circle-o" />{{$tools.getTen(playItem[countKey])}}</span>
          </div>
          <div class="text-wrap">
            <span>{{playItem[desKey]}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {Icon} from 'vant'
export default {
  name: 'Playlist',
  props: {
    title: String,
    data: Array,
    toAllText: String,
    imgKey: String,
    countKey: String,
    desKey: String
  },
  data () {
    return {
    }
  },
  components: {
    [Icon.name]: Icon
  }
}
</script>

<style scoped lang="less">
  .playlist__component{
      border-top: 1px solid #cccccc;
      padding: 0 5vw;
      margin: 25px 0;
      .playlist__header{
        margin: 10px auto 5px;
        .playlist__title{
          font-weight: bold;
        }
        .playlist__toAll{
          background: #fff;
          border: 1px solid #aaa;
          border-radius: 50px;
          font-size: 12px;
          float: right;
        }
      }
      .playlist__row{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .playlist__col{
          width: 30%;
          font-size: 12px;
          margin-top: 15px;
          .img-wrap{
            position: relative;
            img{
              width: 100%;
              height: auto;
              border-radius: 5px;
            }
            .play-num{
              position: absolute;
              right: 0px;
              top: 5px;
              transform: scale(0.75);
              line-height: 1;
              color: #ffff;
            }
          }
          .text-wrap{
          }
        }
      }
    }
</style>
