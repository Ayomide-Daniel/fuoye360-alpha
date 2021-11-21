<template>
  <div>
    <section
      class="section section-1"
      :style="`background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${require('~/assets/images/leader.jpg')})`"
    >
      <div class="container">
        <div class="meta-div" style="display: block">
          <h1 class="type"></h1>
          <blockquote cite="" class="green-text">
            <b>~ Martin Luther King Jr </b>
          </blockquote>
        </div>
        <div class="img-div">
          <img
            :src="require('~/assets/images/leader.jpg')"
            alt=""
            class="section-1-img"
          />
        </div>
      </div>
    </section>
    <section class="section container">
      <div class="meta-div">
        <h1>Leaderboard</h1>
      </div>
      <br />
      <div class="winner-div green-bg">
        <div class="img-div">
          <img
            :src="require('~/assets/images/profile.png')"
            alt=""
            data-aos="zoom-out"
          />
          <div class="bg-gradient"></div>
          <div class="winner-title">
            <div class="meta-div">
              <h1 class="bi bi-award icon"></h1>
              <h1>Ayomide Daniel</h1>
            </div>
            <div class="stars-count">
              <span class="bi bi-star-fill"></span
              ><span class="bi bi-star-fill"></span>
              <span class="bi bi-star"></span><span class="bi bi-star"></span>
              <span class="bi bi-star"></span>
            </div>
          </div>
        </div>
        <div class="container inspiration">
          <br />
          <h4 class="type" data-aos="fade-down" style="font-size: 1.2rem">
            "Think differently.
            <br />
            Innovate differently.
            <br />
            Provide solutions rather than discuss problems.
            <br />
            And while you do these, remember that your greatest strength lies in
            doing things according to your own unique abilities.
            <br />
            These are the words I live and breathe by."
          </h4>
          <br />
          <p><b> ~ Ayomide Daniel,</b> on his philanthropic inspiration</p>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="leaderboard">
        <div class="leaderboard-div">
          <img :src="require('~/assets/images/profile.png')" alt="" />
          <div class="content-div yellow-bg container">
            <div class="meta">
              <h4>Brown</h4>
              <p class="">
                <span
                  ><b
                    ><i
                      class="bi bi-gift icon"
                      style="margin-right: 0.5rem"
                    ></i> </b
                  >1000</span
                >
              </p>
              <div class="stars-count">
                <span class="bi bi-star-fill"></span
                ><span class="bi bi-star-fill"></span>
                <span class="bi bi-star"></span><span class="bi bi-star"></span>
                <span class="bi bi-star"></span>
              </div>
            </div>
            <h2 class="key yellow-div">2</h2>
          </div>
        </div>
        <div class="leaderboard-div">
          <img :src="require('~/assets/images/profile.png')" alt="" />
          <div class="content-div blue-bg container">
            <div class="meta">
              <h4>Brown</h4>
              <p class="">
                <span
                  ><b
                    ><i
                      class="bi bi-gift icon"
                      style="margin-right: 0.5rem"
                    ></i> </b
                  >1000</span
                >
              </p>
              <div class="stars-count">
                <span class="bi bi-star-fill"></span
                ><span class="bi bi-star-fill"></span>
                <span class="bi bi-star"></span><span class="bi bi-star"></span>
                <span class="bi bi-star"></span>
              </div>
            </div>
            <h2 class="key blue-div">3</h2>
          </div>
        </div>
        <div class="leaderboard-div">
          <img :src="require('~/assets/images/profile.png')" alt="" />
          <div class="content-div container n-special highlight-container">
            <div class="meta">
              <h4>Brown</h4>
              <p class="">
                <span
                  ><b
                    ><i
                      class="bi bi-gift icon"
                      style="margin-right: 0.5rem"
                    ></i> </b
                  >1000</span
                >
              </p>
              <div class="stars-count">
                <span class="bi bi-star-fill"></span
                ><span class="bi bi-star-fill"></span>
                <span class="bi bi-star"></span><span class="bi bi-star"></span>
                <span class="bi bi-star"></span>
              </div>
            </div>
            <h2 class="key">4</h2>
          </div>
        </div>
        <div class="leaderboard-div">
          <img :src="require('~/assets/images/profile.png')" alt="" />
          <div class="content-div container n-special highlight-container">
            <div class="meta">
              <h4>Brown</h4>
              <p class="">
                <span
                  ><b
                    ><i
                      class="bi bi-gift icon"
                      style="margin-right: 0.5rem"
                    ></i> </b
                  >1000</span
                >
              </p>
              <div class="stars-count">
                <span class="bi bi-star-fill"></span
                ><span class="bi bi-star-fill"></span>
                <span class="bi bi-star"></span><span class="bi bi-star"></span>
                <span class="bi bi-star"></span>
              </div>
            </div>
            <h2 class="key">5</h2>
          </div>
        </div>
        <div class="leaderboard-div">
          <img :src="require('~/assets/images/profile.png')" alt="" />
          <div class="content-div container n-special highlight-container">
            <div class="meta">
              <h4>Brown</h4>
              <p class="">
                <span
                  ><b
                    ><i
                      class="bi bi-gift icon"
                      style="margin-right: 0.5rem"
                    ></i> </b
                  >1000</span
                >
              </p>
              <div class="stars-count">
                <span class="bi bi-star-fill"></span
                ><span class="bi bi-star-fill"></span>
                <span class="bi bi-star"></span><span class="bi bi-star"></span>
                <span class="bi bi-star"></span>
              </div>
            </div>
            <h2 class="key">6</h2>
          </div>
        </div>
        <div class="leaderboard-div">
          <img :src="require('~/assets/images/profile.png')" alt="" />
          <div class="content-div container n-special highlight-container">
            <div class="meta">
              <h4>Brown</h4>
              <p class="">
                <span
                  ><b
                    ><i
                      class="bi bi-gift icon"
                      style="margin-right: 0.5rem"
                    ></i> </b
                  >1000</span
                >
              </p>
              <div class="stars-count">
                <span class="bi bi-star-fill"></span
                ><span class="bi bi-star-fill"></span>
                <span class="bi bi-star"></span><span class="bi bi-star"></span>
                <span class="bi bi-star"></span>
              </div>
            </div>
            <h2 class="key">7</h2>
          </div>
        </div>
        <div class="leaderboard-div">
          <img :src="require('~/assets/images/profile.png')" alt="" />
          <div class="content-div container n-special highlight-container">
            <div class="meta">
              <h4>Brown</h4>
              <p class="">
                <span
                  ><b
                    ><i
                      class="bi bi-gift icon"
                      style="margin-right: 0.5rem"
                    ></i> </b
                  >1000</span
                >
              </p>
              <div class="stars-count">
                <span class="bi bi-star-fill"></span
                ><span class="bi bi-star-fill"></span>
                <span class="bi bi-star"></span><span class="bi bi-star"></span>
                <span class="bi bi-star"></span>
              </div>
            </div>
            <h2 class="key">8</h2>
          </div>
        </div>
        <div class="leaderboard-div">
          <img :src="require('~/assets/images/profile.png')" alt="" />
          <div class="content-div container n-special highlight-container">
            <div class="meta">
              <h4>Brown</h4>
              <p class="">
                <span
                  ><b
                    ><i
                      class="bi bi-gift icon"
                      style="margin-right: 0.5rem"
                    ></i> </b
                  >1000</span
                >
              </p>
              <div class="stars-count">
                <span class="bi bi-star-fill"></span
                ><span class="bi bi-star-fill"></span>
                <span class="bi bi-star"></span><span class="bi bi-star"></span>
                <span class="bi bi-star"></span>
              </div>
            </div>
            <h2 class="key">9</h2>
          </div>
        </div>
        <div class="leaderboard-div">
          <img :src="require('~/assets/images/profile.png')" alt="" />
          <div class="content-div container n-special highlight-container">
            <div class="meta">
              <h4>Brown</h4>
              <p class="">
                <span
                  ><b
                    ><i
                      class="bi bi-gift icon"
                      style="margin-right: 0.5rem"
                    ></i> </b
                  >1000</span
                >
              </p>
              <div class="stars-count">
                <span class="bi bi-star-fill"></span
                ><span class="bi bi-star-fill"></span>
                <span class="bi bi-star"></span><span class="bi bi-star"></span>
                <span class="bi bi-star"></span>
              </div>
            </div>
            <h2 class="key">10</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Leaderboard',
  mounted() {
    // eslint-disable-next-line no-undef
    AOS.init()
    $('[data-aos]').parent().addClass('hideOverflowOnMobile')
    const options = {
      strings: [
        // '"<span class="highlight">Be not afraid of greatness. </span><br />Some are born great, some achieve greatness, and others have greatness thrustupon them."',
        '"Not everybody can be famous but <span class="highlight">everybody can be great</span>, because greatness is determined by service"',
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
}
.section-1 {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  padding-top: 200px;
}
.section-1 .meta-div {
  color: var(--white);
}
.section-1 h1 {
  font-size: 2.5rem;
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

.meta-div {
  display: flex;
  align-items: center;
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
  z-index: 1;
  height: -webkit-fill-available;
  width: 100%;
  background-image: linear-gradient(
    rgba(133, 108, 108, 0),
    rgba(0, 0, 0, 0.5)
  ) !important;
  border-radius: 1rem 1rem 0 0;
}

@media screen and (min-width: 768px) {
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
  .section-1 .container {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    grid-gap: 1rem;
  }
  .section-1-img {
    display: block;
  }
}
.img-div {
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  position: relative;
}
.inspiration {
  position: sticky;
  padding: 3rem;
  top: 200px;
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
.leaderboard {
  display: flex;
  overflow-x: scroll;
}
.leaderboard-div img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
  display: flex;
}
.stars-count {
  display: flex;
  margin-bottom: 0.5rem;
}
.stars-count span {
  margin: 0 0.15rem;
  color: goldenrod;
}
.leaderboard-div {
  display: inline-block;
  margin: 1rem;
}
.leaderboard .content-div {
  border-radius: 0 0 1rem 1rem;
  align-items: center;
  position: relative;
  display: inline-block;
  text-align: center;
  padding: 2rem;
  padding-top: 1rem;
}
.key {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 1rem 1rem;
}
.content-div .meta {
  margin-left: 1rem;
}
.content-div p {
  margin: 0.5rem 0;
}
/* . {
  display: flex;
  justify-content: space-between;
} */
.leaderboard .n-special {
  /* background: var(--border-color); */
  border-bottom: 1px solid var(--border);
}
.n-special .key {
  background: var(--border);
}
</style>
