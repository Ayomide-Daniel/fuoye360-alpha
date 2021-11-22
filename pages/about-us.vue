<template>
  <div>
    <section
      class="section-1 section"
      :style="`background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${require('~/assets/images/plan.jpg')})`"
    >
      <div class="container">
        <div class="meta-div">
          <h1 class="type"></h1>
          <br />
          <div class="">
            Thus, we exist to: <br /><br />
            <div class="stories-container">
              <div class="why">
                <h2 class="bi bi-check-all icon green-div"></h2>
                <p>
                  Connect the overlooked group of givers in society to the
                  needy.
                </p>
              </div>
              <div class="why">
                <h2 class="bi bi-check-all icon green-div"></h2>
                <p>
                  Ensure that their sophisticated and prudent givings tackle
                  some of the prevalent social problems in their nations.
                </p>
              </div>
            </div>
          </div>
          <div class="btn-div">
            <nuxt-link v-ripple to="/" class="btn fill-btn this-btn"
              >Join us to change the narrative</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <section class="section grey-bg">
      <div class="container">
        <div class="meta-div intro-meta">
          <h1>
            " Man is a tool-using animal. <br />
            Without tools he is nothing,
            <span class="highlight">with tools he is all.</span>"
          </h1>
          <blockquote cite="" class="green-text">
            <b>~Thomas Carlyle </b>
          </blockquote>
          <br />
          <p>
            At FUOYE360, with the right people, with the right skills, and at
            the right time, we have all we need to enable us to do great things
            together.
          </p>
        </div>
        <div class="meta-div intro-meta">
          <h1 style="text-align: center">Our Team</h1>
          <br />
        </div>
        <div class="about-img-div">
          <div class="about-img green-bg">
            <img :src="require('~/assets/images/brown.jpg')" alt="" />
            <!-- data-aos="zoom-out" -->
            <div class="name-div">
              <p>
                <span class="name">Brown</span><br />
                <span>Web Developer</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section green-bg section-3">
      <div class="container">
        <div class="meta-div intro-meta">
          <h1>What are our values?</h1>
          <br />
          <p>
            At FUOYE360, we realize the importance of values and thus try to
            uphold ours. They define our culture, serve as the foundation for
            our identity, and are the compass of our interaction with all
            stakeholders: students, administrative offices on campus, investors,
            partners, and communities.
          </p>
        </div>
        <br />
        <br />
        <div class="values-div">
          <div class="highlight-container grey-bg" data-aos="fade-up">
            <div class="img-div">
              <img :src="require('~/assets/images/profile.png')" alt="" />
            </div>
            <div class="meta-info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
              nobis assumenda, facilis voluptatem blanditiis consectetur aut
              repellendus architecto veniam quo quasi rerum omnis voluptates
              totam temporibus non iure? Modi, corporis.
            </div>
          </div>
          <div class="highlight-container grey-bg" data-aos="fade-up">
            <div class="img-div">
              <img :src="require('~/assets/images/profile.png')" alt="" />
            </div>
            <div class="meta-info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
              nobis assumenda, facilis voluptatem blanditiis consectetur aut
              repellendus architecto veniam quo quasi rerum omnis voluptates
              totam temporibus non iure? Modi, corporis.
            </div>
          </div>
          <div class="highlight-container grey-bg" data-aos="fade-up">
            <div class="img-div">
              <img :src="require('~/assets/images/profile.png')" alt="" />
            </div>
            <div class="meta-info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
              nobis assumenda, facilis voluptatem blanditiis consectetur aut
              repellendus architecto veniam quo quasi rerum omnis voluptates
              totam temporibus non iure? Modi, corporis.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'AboutUs',
  // components: { VueSlickCarousel },
  mounted() {
    $('.btn').click(() => {
      return window.navigator.vibrate(150)
    })

    // eslint-disable-next-line no-undef
    AOS.init()
    $('[data-aos]').parent().addClass('hideOverflowOnMobile')
    const options = {
      strings: [
        'At FUOYE360, we realize first-hand how difficult entering a university can be. Thus, we\'ve made it our life\'s mission to make "being a student" <span class="highlight">enjoyable, easy, and fun...</span>',
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
.section-1 .meta-div {
  color: var(--white);
}

.section-1 h1 {
  font-size: 2.5rem;
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
.stories-container p {
  margin-left: 2.5rem;
}
.about-img-div,
.values-div {
  display: grid;
  grid-gap: 5rem;
  padding-bottom: 4rem;
}
.about-img {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  margin-bottom: 4rem;
  text-align: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.about-img .name-div {
  padding: 1.5rem 0;
}
.about-img .name {
  font-weight: bold;
}
.about-img img {
  width: inherit;
  height: inherit;
  border-radius: inherit;
  object-fit: cover;
}
.section-3 .intro-meta {
  margin: 0 auto;
  text-align: center;
}
.section-3 .highlight-container {
  padding: 0;
}
.section-3 .highlight-container .img-div {
  display: flex;
}
.section-3 .highlight-container .img-div img {
  width: 100%;
  height: auto;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.section-3 .highlight-container .meta-info {
  padding: 2rem;
}

@media screen and (min-width: 768px) {
  .about-img-div {
    grid-template-columns: repeat(3, 1fr);
  }

  .values-div {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .about-img-div {
    grid-template-columns: repeat(4, 1fr);
  }
  .values-div {
    grid-template-columns: repeat(3, 1fr);
  }
}
/* .this-btn::before {
  position: absolute;
  top: 5px;
  z-index: 0;
  left: 5px;
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  background: var(--white);
  border: 2px solid var(--green);
  border-radius: inherit;
} */
</style>
