<template>
  <div class="header">
    <div class="header-title">
      <div class="name">AI-fisher</div>
      <span class="type">'s blog</span>
    </div>
    <div class="header-content">
      <div class="link">
        <span v-for="(item, index) in linkList" :key="index">
          {{ item.title }}
        </span>
      </div>
      <div class="search">
        <div class="search-icon">
          <img src="@/assets/images/search.png" alt="" />
        </div>
        <div class="search-input"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      linkList: [
        { title: "首页", url: "" },
        { title: "前端", url: "" },
        { title: "后端", url: "" },
        { title: "环境", url: "" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.header
  position: fixed
  left 0
  right 0
  display flex
  justify-content space-between
  align-items center
  padding 0 32px
  height 80px
  color #fff
  background-color #2e3033
  &-title
    position relative
    width 170px
    .name
      height 50px
      font-size 34px
      font-weight 300
      font-family Josefin Sans,sans-serif
    .type
      position absolute
      font-size 12px
      font-font-family MicrosoftYaqiHeiLight
      top 5px
      right 0

  &-content
    display flex
    .link
      span
        padding 0 10px
        line-height 40px
        cursor pointer
        &:hover
          color #3eaf7c

    .search
      width 204px
      height 40px
      background-color #494b4d
      margin-left 20px
      display flex
      border-size 2px
      border-radius 2px
      &:hover
        border-color #3eaf7c
        box-shadow 0 0 5px #3eaf7c
        transition: all .5s
      &-icon
        width 32px
        display flex
        justify-content center
        align-items center
        img
          width 15px
      
</style>
