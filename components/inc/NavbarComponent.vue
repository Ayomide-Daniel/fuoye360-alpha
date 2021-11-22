<template>
  <div class="nav-component">
    <header class="container">
      <div class="sm-nav-container nav-container" style="padding: 0.5rem 0">
        <nuxt-link to="/" class="white-txt"
          ><img
            :src="require('~/assets/images/360logo.png')"
            alt="fuoye360-logo"
            height="50"
        /></nuxt-link>
        <button
          v-ripple
          class="toggle-btn btn"
          type="button"
          @click="showMobileNav"
        >
          <span class="toggle-btn-span1 s-1"></span>
          <span class="toggle-btn-span2 s-2"></span>
          <span class="toggle-btn-span3 s-3"></span>
        </button>
      </div>
      <div class="lg-nav-container nav-container">
        <nuxt-link to="/" style="color: var(--white)"
          ><img
            :src="require('~/assets/images/360logo.png')"
            alt="fuoye360-logo"
            height="50"
          />
        </nuxt-link>
        <div class="nav-div">
          <div class="btn-div" style="margin-top: 0">
            <nuxt-link to="/" class="btn"
              ><i class="bi bi-shop icon"></i> Shop</nuxt-link
            ><nuxt-link to="/broadcast" class="btn"
              ><i class="bi bi-megaphone icon"></i> Broadcast</nuxt-link
            >
            <nuxt-link to="/about-us" class="btn"
              ><i class="bi bi-person icon"></i> About us</nuxt-link
            >
            <nuxt-link to="/" class="btn fill-btn">Create an account</nuxt-link>
          </div>
        </div>
      </div>
    </header>
    <v-slide-x-transition>
      <div v-show="showAsideNav" class="aside-container vs-wrapper">
        <div
          :style="`background: ${$vuetify.theme.themes.light.aside}`"
          class="vs-container"
          @click="ctcMobileNav"
        >
          <aside class="mobile-nav">
            <br />
            <br />
            <br />
            <div class="aside-nav-content nav-container">
              <div class="navbar-links">
                <div class="btn-div">
                  <nuxt-link v-ripple to="/" class="btn default-btn"
                    ><i class="bi bi-shop icon"></i> Shop</nuxt-link
                  >
                </div>
                <div class="btn-div">
                  <nuxt-link
                    v-ripple
                    to="/broadcast
"
                    class="btn default-btn"
                    ><i class="bi bi-megaphone icon"></i> Broadcast</nuxt-link
                  >
                </div>
                <div class="btn-div">
                  <nuxt-link v-ripple to="/about-us" class="btn default-btn"
                    ><i class="bi bi-person icon"></i> About Us</nuxt-link
                  >
                </div>
                <div class="btn-div">
                  <nuxt-link to="/" class="btn fill-btn"
                    >Create an account</nuxt-link
                  >
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </v-slide-x-transition>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Navbar',
  data() {
    return {
      showAsideNav: false,
    }
  },
  watch: {
    $route() {
      return this.closeMobileNav()
    },
  },
  mounted() {
    $('.btn').onclick(() => {
      window.navigator.vibrate(200)
    })
  },
  methods: {
    ctcMobileNav(e) {
      if ($(e.target).closest('aside').length === 0) {
        this.closeMobileNav()
      }
    },
    closeMobileNav() {
      $('.toggle-btn .s-1').css({
        transform: 'rotate(0deg)',
        width: '45px',
        background: 'var(--white)',
      })
      $('.toggle-btn .s-2').css({
        transform: 'scale(1)',
      })
      $('.toggle-btn .s-3').css({
        transform: 'rotate(0deg)',
        width: '20px',
        background: 'var(--white)',
      })

      return (this.showAsideNav = false)
    },
    showMobileNav() {
      if (this.showAsideNav === false) {
        $('.toggle-btn .s-1').css({
          transform: 'rotate(35deg) translateY(5px) translateX(2px)',
          width: '35px',
          background: '#000',
        })
        $('.toggle-btn .s-2').css({ transform: 'scale(0)' })
        $('.toggle-btn .s-3').css({
          transform: 'rotate( -35deg ) translateY(-8px) translateX(3px)',
          width: '35px',
          background: '#000',
        })
        return (this.showAsideNav = true)
      }
      return this.closeMobileNav()
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.toggle-btn {
  z-index: 5;
}
.toggle-btn span {
  display: block;
  content: '';
  /* width: 35px; */
  height: 3px;
  margin-bottom: 4px;
  transition: all ease-in-out 300ms;
  background: var(--white);
}
.s-1 {
  width: 45px;
}
.s-2 {
  width: 35px;
}
.s-3 {
  width: 20px;
}

.sm-nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
aside {
  padding: 1rem;
}
.navbar-links {
  display: grid;
  grid-gap: 2rem;
}
.navbar-links a {
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: capitalize;
  /* background: limegreen; */
}

.navbar-links i {
  margin-right: 0.5rem;
}
.close-mobile-nav {
  display: flex;
  justify-content: flex-end;
}
.close-mobile-nav button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 3rem;
  border: none;
  background: none;
}
.lg-nav-container {
  display: none;
}
.lg-nav-container .btn-div a:hover {
  color: var(--brand-color);
}

.navbar-links a:hover {
  color: var(--brand-color);
}
@media screen and (min-width: 768px) {
  .sm-nav-container {
    display: none;
  }
  .lg-nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lg-nav-container .btn-div {
    align-items: center;
  }
  .lg-nav-container .btn-div .btn {
    margin-left: 1rem;
    border: none;
    color: var(--white);
  }
}
</style>
