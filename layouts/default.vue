<template>
  <div>
    <v-app id="app-wrapper">
      <v-main>
        <NavbarComponent class="nav-component" />
        <router-view class="router-view"></router-view>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import NavbarComponent from '~/components/inc/NavbarComponent'
export default {
  name: 'Default',
  components: {
    NavbarComponent,
  },
  mounted() {
    // eslint-disable-next-line no-undef
    AOS.init()
  },
}
</script>

<style scoped>
.nav-component {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.055);
  background: rgb(109 109 109 / 25%);
  backdrop-filter: blur(10px);
  z-index: 10;
}

@media screen and (min-width: 768px) {
  .router-view {
    margin-top: unset;
  }
}
</style>
