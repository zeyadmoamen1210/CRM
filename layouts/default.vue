
<template>
  <div>
      <Navbar v-if="$auth.loggedIn" />
      <Nuxt/>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components:{Navbar}
}
</script>

<style lang="scss">
@font-face {
    font-family: 'segoe';
    src: url('../assets/Segoe-UI-Font/SEGOEUI.TTF');
}


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'segoe', Arial , sans-serif;
}
@import "../assets/scss/override.scss";
.el-select{
  width: 100%;
      .el-select__caret{
        color: #ffcb05 !important;
        font-size: 12px !important;
        font-weight: bold;
      }
}
</style>
