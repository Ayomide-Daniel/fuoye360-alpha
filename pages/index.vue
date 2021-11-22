<template>
  <div>
    <section
      class="section-1 section"
      :style="`background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${require('~/assets/images/reading.jpg')})`"
    >
      <div class="container">
        <div class="meta-div">
          <h1 class="type"></h1>
          <blockquote cite="" class="green-text">
            <b>~Brown</b>
          </blockquote>
          <div class="btn-div">
            <nuxt-link v-ripple to="/" class="btn fill-btn"
              >Start enjoying life as a student</nuxt-link
            >
          </div>
        </div>
        <div class="img-div">
          <!-- <img
            :src="require('~/assets/images/reading.jpg')"
            alt=""
            class="section-1-img"
          /> -->
        </div>
      </div>
    </section>
    <section style="display: flex; align-items: center" class="section">
      <div class="container">
        <div>
          <div class="meta-div intro-meta">
            <h1>Why do we exist?</h1>
          </div>
          <br />
          <div class="stories-container">
            <div class="why">
              <h2 class="bi bi-check-all icon green-div"></h2>
              <p>
                <b>
                  To connect the overlooked group of givers in society to the
                  needy.
                </b>
              </p>
            </div>
            <div class="why">
              <h2 class="bi bi-check-all icon green-div"></h2>
              <p>
                <b>
                  To ensure that their sophisticated and prudent givings tackle
                  some of the prevalent social problems in their nations.
                </b>
              </p>
            </div>
            <div class="btn-div">
              <nuxt-link v-ripple class="btn default-btn" to="/about-us"
                ><i class="bi bi-book icon"></i> Read more about us</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container" style="display: block">
        <div class="meta-div" style="display: flex">
          <h1>OUR SERVICES</h1>
        </div>
        <br />
        <div class="swiper-container">
          <vue-slick-carousel
            class="swiper-wrapper"
            :arrows="false"
            :dots="true"
            :autoplay="true"
            :infinite="true"
          >
            <div>
              <div class="winner-div green-bg">
                <div class="img-div">
                  <img
                    :src="require('~/assets/images/browse-shop.jpg')"
                    alt=""
                    data-aos="zoom-out"
                  />
                  <div class="bg-gradient"></div>
                  <div class="winner-title">
                    <div class="meta-div" style="display: flex">
                      <h1 class="bi bi-shop icon"></h1>
                      <h1>FUOYE360 SHOP</h1>
                    </div>
                    <div class="btn-div">
                      <nuxt-link v-ripple to="/" class="btn fill-btn"
                        >Open FUOYE360 Shop</nuxt-link
                      >
                    </div>
                  </div>
                </div>
                <div class="inspiration">
                  <br />
                  <h4 data-aos="fade-down" style="font-size: 1.2rem">
                    "Think differently.
                    <br />
                    Innovate differently.
                    <br />
                    Provide solutions rather than discuss problems.
                    <br />
                    And while you do these, remember that your greatest strength
                    lies in doing things according to your own unique abilities.
                    <br />
                    These are the words I live and breathe by."
                  </h4>
                  <br />
                  <p>
                    <b> ~ Ayomide Daniel,</b> on his philanthropic inspiration
                  </p>
                  <br />
                  <nuxt-link class="green-text" to="/leaderboard"
                    >Find more inspiration</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div>
              <div class="winner-div green-bg">
                <div class="img-div">
                  <img
                    :src="require('~/assets/images/megaphone.jpg')"
                    alt=""
                    data-aos="zoom-out"
                  />
                  <div class="bg-gradient"></div>
                  <div class="winner-title">
                    <div class="meta-div" style="display: flex">
                      <h1 class="bi bi-megaphone icon"></h1>
                      <h1>FUOYE360 BROADCAST</h1>
                    </div>
                    <div class="btn-div">
                      <nuxt-link v-ripple to="/" class="btn fill-btn"
                        >Open FUOYE360 Broadcast</nuxt-link
                      >
                    </div>
                  </div>
                </div>
                <div class="inspiration">
                  <br />
                  <h4 data-aos="fade-down" style="font-size: 1.2rem">
                    "Think differently.
                    <br />
                    Innovate differently.
                    <br />
                    Provide solutions rather than discuss problems.
                    <br />
                    And while you do these, remember that your greatest strength
                    lies in doing things according to your own unique abilities.
                    <br />
                    These are the words I live and breathe by."
                  </h4>
                  <br />
                  <p>
                    <b> ~ Ayomide Daniel,</b> on his philanthropic inspiration
                  </p>
                  <br />
                  <nuxt-link class="green-text" to="/leaderboard"
                    >Find more inspiration</nuxt-link
                  >
                </div>
              </div>
            </div>
          </vue-slick-carousel>
          <!-- Add Pagination -->
          <div class="swiper-pagination swiper-pagination-white"></div>
          <!-- Add Arrows -->
          <div class="swiper-div">
            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
          </div>
        </div>

        <br />
        <!-- <div class="container">
          <div class="meta-div">
            <h2>Looking for more Inspiration?</h2>
            <p style="margin: 0">
              Checkout the
              <nuxt-link to="/leaderboard" class="green-text"
                >leaderboard
              </nuxt-link>
              to see how great people are accelerating charitable giving
            </p>
          </div>
          <div class="btn-div">
            <nuxt-link v-ripple class="btn default-btn" to="/leaderboard"
              ><i class="bi bi-lightbulb icon"></i> Find more
              inspiration</nuxt-link
            >
          </div>
        </div> -->
      </div>
    </section>
    <section class="content-2">
      <div class="container">
        <div class="meta-div content2-meta intro-meta">
          <h2>"How do we work?"</h2>
          <p>Well then, let's tell you in 4pics</p>
        </div>
        <div class="content-box" data-aos="fade-up-left">
          <div class="content box-1">
            <h2 class="bi bi-search icon"></h2>
            <div class="meta-div">
              <p>
                Create your profile and browse through Feed Me Africa vendors to
                find the available packages and meal offers to purchase.
              </p>
            </div>
            <div class="img-div">
              <img :src="require('~/assets/images/chatting-min.jpg')" alt="" />
            </div>
          </div>
          <div class="content box-2" data-aos="fade-up-right">
            <h2 class="bi bi-upc-scan icon"></h2>
            <div class="meta-div">
              <p>Generate QR codes for the packages you bought.</p>
            </div>
            <div class="img-div">
              <img :src="require('~/assets/images/qr-min.jpg')" alt="" />
            </div>
          </div>
          <div class="content box-3" data-aos="fade-up-left">
            <h2 class="bi bi-share icon"></h2>
            <div class="meta-div">
              <p>
                Share your QR codes, post them, tweet them, print them, give
                them to whom you will.
              </p>
            </div>
            <div class="img-div">
              <img :src="require('~/assets/images/sm-min.jpg')" alt="" />
            </div>
          </div>
          <div class="content box-4" data-aos="fade-up-right">
            <h2 class="bi bi-geo-alt icon"></h2>
            <div class="meta-div">
              <p>
                Remind your recipients to take their QR codes to the vendors you
                bought from so that they get a nice meal to eat.
              </p>
            </div>
            <div class="img-div">
              <img :src="require('~/assets/images/walk-min.jpg')" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-3 love">
      <div class="container content3-flex">
        <div class="highlight-container grey-bg">
          <div class="container">
            <div class="meta-div">
              <div class="intro-meta">
                <h2>Reasons people use FUOYE360</h2>
              </div>
              <br />
              <div class="content" data-aos="fade-up">
                <div class="check-div">
                  <i class="bi bi-emoji-laughing"></i>
                </div>
                <div class="content-txt">
                  <h4>Fun, Easy & Cool</h4>
                  <p>
                    With FMA, charitable giving is now much fun and easy. Who
                    knew great things could be done easily?
                  </p>
                </div>
              </div>
              <div class="content" data-aos="fade-up">
                <div class="check-div">
                  <i class="bi bi-lightbulb"></i>
                </div>
                <div class="content-txt">
                  <h4>Motivation, Inspiration & Accomplishment</h4>
                  <p>
                    At some point, everyone needs a little nudge to do great
                    things. Not to worry, we've got you covered at FMA. We see
                    it as our duty to continue giving you that motivation you
                    need to do great things.
                  </p>
                </div>
              </div>
              <div class="content" data-aos="fade-up">
                <div class="check-div">
                  <i class="bi bi-lock"></i>
                </div>
                <div class="content-txt">
                  <h4>Authentication & Security</h4>
                  <p>
                    The authentication, safety, and security of your account are
                    some of our top priorities at FMA. We help keep your account
                    secured as you go on doing great things.
                  </p>
                </div>
              </div>
            </div>
            <div class="img-div" data-aos="zoom-out">
              <img :src="require('~/assets/images/family.jpg')" alt="" />
              <img
                :src="require('~/assets/images/family.jpg')"
                alt=""
                class="blur-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <div class="section-4 partners">
      <div class="container" style="display: block">
        <div class="meta-div">
          <h2>Some of our notable partners include</h2>
        </div>
        <br />
        <div class="partners-div">
          <div class="img-div">
            <img
              :src="require('~/assets/images/honeywell.jpg')"
              alt=""
              data-aos="fade-right"
            />
          </div>
          <div class="img-div">
            <img
              :src="require('~/assets/images/download.png')"
              alt=""
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// Can also be included with a regular script tag
// import Typed from 'typed.js'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style forarrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import $ from 'jquery'
export default {
  name: 'Index',
  components: { VueSlickCarousel },
  mounted() {
    $('.btn').click(() => {
      return window.navigator.vibrate(200)
    })
    // eslint-disable-next-line no-undef
    AOS.init()
    $('[data-aos]').parent().addClass('hideOverflowOnMobile')
    const options = {
      strings: [
        '"Entering a university is hard. <span class="highlight"><br/>Being a student should be easy!"</span>',
      ],
      typeSpeed: 40,
    }

    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-undef
    return new Typed('.type', options)
  },
}
</script>

<style scoped>
.section {
  min-height: 100vh;
  padding: 25px 0;
}
.section-1 {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  padding-top: 200px;
}

.section-1 h1 {
  font-size: 2.5rem;
}

.section-1 .meta-div {
  color: var(--white);
}
.img-div {
  padding: 1rem 0;
}
.section-1-img {
  display: none;
  border-radius: 1rem;
  width: 100%;
  right: 0;
  left: 0;
  margin: 0 auto;
}
.content-2 h1 {
  font-size: 2rem;
}
.content-2 .icon {
  margin: 1rem auto;
  text-align: center;
}
.content-box {
  display: grid;
  justify-content: center;
  grid-gap: 1rem;
}
.content {
  clear: both;
  margin: 0.5rem 0;
  padding: 1rem;
  width: 280px;
  height: 400px;
  border-radius: 1rem;
  position: relative;
}
.content .img-div {
  border-radius: 1rem;
}
.box-1 {
  background: var(--blue-bg);
}
.box-1 .img-div {
  background: var(--blue);
}
.box-2 {
  background: var(--orange-bg);
}
.box-2 .img-div {
  background: var(--orange);
}
.box-3 {
  background: var(--green-bg);
}
.box-3 .img-div {
  background: var(--green);
}
.box-4 {
  background: var(--pink-bg);
}
.box-4 .img-div {
  background: var(--pink);
}
.content .img-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
}
.content img {
  display: flex;
  width: 150px;
  height: 150px;
  object-fit: cover !important;
  border-radius: 1rem;
  margin-left: -25px;
  margin-top: -25px;
}

.content .meta-div {
  display: flex;
}
.meta-div p {
  margin-left: 0.5rem;
}
.content-3 .content {
  position: relative;
  width: unset;
  height: unset;
  border-radius: unset;
}
.content-3 .check-div {
  position: absolute;
  left: 0;
  box-shadow: 0 4px 14px 0 var(--green-bg);
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 50%;
  background: var(--green);
  color: var(--white);
}

.content-3 .content-txt {
  margin-left: 2rem;
}

.content-3 .btn {
  padding: 0.5rem 1rem;
  min-width: 150px;
}

.content-3 .highlight-container .img-div {
  position: relative;
}
.content-3 p {
  margin: 1rem 0;
}
.content-3 .highlight-container img:first-child {
  margin-top: -15px;
  margin-left: -12px;
  position: absolute;
  z-index: 1;
}
.content-3 .highlight-container .blur-img {
  filter: blur(4px);
}
.stories-container .why {
  display: flex;
  margin-bottom: 1.5rem;
  position: relative;
}
.stories-container .why .icon {
  position: absolute;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stories-container .img-div {
  padding: 2rem;
  position: relative;
  min-height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
  color: #fff;
  line-height: 2;
}
.stories-container p {
  margin-left: 2.5rem;
  font-size: 1.1rem;
  font-weight: bold;
}
.winner-div .img-div {
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  position: relative;
}
.stars-count span {
  margin: 0 0.15rem;
  color: goldenrod;
}
.winner-div {
  display: grid;
  border-radius: 1rem;
}
.winner-div img {
  width: 100%;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
}
.bg-gradient {
  position: absolute;
  display: block;
  /* display: none; */
  z-index: 1;
  height: -webkit-fill-available;
  width: 100%;
  background-image: linear-gradient(
    rgba(77, 37, 37, 0),
    rgba(0, 0, 0, 0.5)
  ) !important;
  border-radius: 1rem 1rem 0 0;
}
.winner-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 2rem;
  color: var(--white);
  z-index: 2;
}
.inspiration {
  position: sticky;
  padding: 3rem;
  top: 200px;
}
.partners img {
  border-radius: 1rem;
  max-width: 150px;
}
.partners-div {
  display: flex;
  /* grid-template-columns: repeat(2, 1fr); */
  justify-content: center;
}
.partners-div .img-div {
  margin: 1rem;
}
.stories-container p {
  font-weight: 300;
}
.swiper-container .meta-div {
  display: flex;
}
@media screen and (min-width: 768px) {
  section .container {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  .section-1 .container {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    grid-gap: 1rem;
  }
  .section-1-img {
    display: block;
  }
  .content-box {
    grid-template-columns: repeat(2, 1fr);
  }
  .content-2 .content2-meta,
  .content-3 .content3-meta {
    margin: 0 auto;
    position: sticky;
    top: 20%;
  }
  .content3-flex {
    align-items: unset;
  }
  .highlight-container .container {
    align-items: center;
  }
  .winner-div {
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    border-radius: 1rem;
  }
  .winner-div img {
    border-radius: 1rem 0 0 1rem;
  }
  .bg-gradient {
    border-radius: 1rem 0 0 1rem;
  }
  .highlight-container .container {
    display: grid;
    grid-template-columns: 45% 55%;
  }
}
</style>
