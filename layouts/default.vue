
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

@import "../assets/scss/override.scss";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'segoe', Arial , sans-serif;
}

</style>
