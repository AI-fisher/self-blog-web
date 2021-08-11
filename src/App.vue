<template>
  <div id="app">
    <Header :class="{'hide': isHide, 'show': isShow}"/>
    <div style="height: 1000px"></div>
    <router-view />
  </div>
</template>

<script>
import Header from "components/Layout/Header";
export default {
  name: "home",
  components: {
    Header
  },
  data() {
    return {
      isHide: false,
      isShow: true
    }
  },
  created () {
    this.listenerFunction();
  },
  beforeDestroy () {
    document.removeEventListener("scroll", this.listenerFunction);
  },
  methods: {
    listenerFunction(e) {
      document.addEventListener('scroll', this.handleScroll, true);
    },
    handleScroll() {
      if (window.pageYOffset) {
        this.isShow = false
        this.isHide = true
      } else {
        this.isShow = true
        this.isHide = false
      }
    }
  }
};
</script>

<style lang="stylus">
*
  margin 0
  padding 0

#app
  .hide
    animation: hide 1s forwards;
    @keyframes hide{
      0% { top: 0; }
      100% { top: -80px; }
    }
  
  .show
    animation: show 1s forwards;
    @keyframes show{
      0% { top: -80px; }
      100% { top: 0; }
    }

</style>
