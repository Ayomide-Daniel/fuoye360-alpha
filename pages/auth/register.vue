<template>
  <div>
    <section
      class="section-1"
      :style="`background-image: linear-gradient(40deg, rgba(0,0,0,.95), rgba(0,0,0,0.75)), url(${require('~/assets/images/reading.jpg')})`"
    >
      <div class="form-container">
        <form action="">
          <h4>Let's get you started shall we?</h4>
          <br />
          <h1>Create account</h1>
          <br />
          <p>Already have an account? Login</p>
          <div>
            <br />
            <p><b>Name</b></p>
            <div
              class="input-div dark-input-div"
              @click="setLabelToActive($event)"
            >
              <!-- <label for="uName"><i class="bi bi-person"></i> Name</label> -->
              <input
                id="uName"
                v-model="form.username"
                type="text"
                name="username"
                value=""
                required
                @input="validateForm($event)"
              />
              <!-- <input
                id="uName"
                v-model="form.username"
                type="text"
                name="username"
                value=""
                required
                @input="validateForm($event)"
              /> -->
            </div>
            <div class="validation-rules">
              <div class="validation">
                <span
                  class="icon bi bi-check"
                  :class="validation.name ? 'valid' : ''"
                ></span>
                <span>No special character/ space except "_"</span>
              </div>
              <div class="validation">
                <span
                  class="icon bi bi-check"
                  :class="validation.name ? 'valid' : ''"
                ></span>
                <span>Don't end with "_" or space</span>
              </div>
            </div>
          </div>
          <div>
            <br />
            <p><b>Email</b></p>
            <!-- <br /> -->
            <div
              class="input-div dark-input-div"
              @click="setLabelToActive($event)"
            >
              <!-- <label for="email"><i class="bi bi-envelope"></i> Email</label> -->
              <input
                v-model="form.email"
                required
                type="email"
                name="email"
                autocomplete="email"
                @input="validateForm($event)"
              />
            </div>
            <div class="validation-rules">
              <div class="validation">
                <span
                  class="icon bi bi-check"
                  :class="validation.email ? 'valid' : ''"
                ></span>
                <span>Valid email</span>
              </div>
            </div>
          </div>
          <div>
            <br />
            <p><b>Phone number</b></p>
            <!-- <br /> -->
            <div
              class="input-div dark-input-div"
              @click="setLabelToActive($event)"
            >
              <!-- <label for="mobile_number"
                ><i class="bi bi-telephone"></i> Phone number</label
              > -->
              <input
                v-model="form.mobile_number"
                required
                type="text"
                name="mobile_number"
                maxlength="11"
                value=""
                @input="validateForm($event)"
              />
            </div>
            <div class="validation-rules">
              <div class="validation">
                <span class="icon bi bi-check"></span>
                <span>Valid phone number</span>
              </div>
            </div>
          </div>
          <div>
            <br />
            <p><b>Password</b></p>
            <!-- <br /> -->
            <div
              class="input-div dark-input-div"
              @click="setLabelToActive($event)"
            >
              <!-- <label for="password"><i class="bi bi-lock"></i> Password</label> -->
              <input
                id="password"
                v-model="form.password"
                required
                :type="!showPassword ? 'password' : 'text'"
                name="password"
                autocomplete="new-password"
              />
              <button
                id="show-password"
                type="button"
                @click="showPassword = !showPassword"
              >
                <span v-if="!showPassword"><i class="bi bi-eye"></i></span
                ><span v-else><i class="bi bi-eye-slash"></i></span>
              </button>
            </div>
            <div class="validation-rules">
              <div class="validation">
                <span class="icon bi bi-check"></span>
                <span>Minimum of 8 letters</span>
              </div>
              <div class="validation">
                <span class="icon bi bi-check"></span>
                <span>Contains a capital letter</span>
              </div>
              <div class="validation">
                <span class="icon bi bi-check"></span>
                <span>Contains a special character</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
  <!-- <div class="wrapper highlight-container">
    <div class="return-home">
      <nuxt-link to="/"
        ><i class="icon bi bi-house"></i> GO BACK HOME</nuxt-link
      >
    </div>
    <div class="form-container lg-container">
      <div></div>
      <div class="lhs">
        <vue-slick-carousel
          :arrows="false"
          :dots="true"
          :autoplay="true"
          :infinite="true"
        >
          <div class="carousel-div">
            <div class="img-div">
              <img :src="require('~/assets/images/browse-shop.jpg')" alt="" />
              <div class="bg-gradient"></div>
              <div class="carousel-meta">
                <div class="meta-div">
                  <h2 class="bi bi-shop icon"></h2>
                  <h2>FUOYE360 SHOP</h2>
                </div>
                <p>Get one link to show all your products</p>
              </div>
            </div>
          </div>
          <div class="carousel-div">
            <div class="img-div">
              <img :src="require('~/assets/images/megaphone.jpg')" alt="" />
              <div class="bg-gradient"></div>
              <div class="carousel-meta">
                <div class="meta-div">
                  <h2 class="bi bi-megaphone icon"></h2>
                  <h2>FUOYE360 BROADCAST</h2>
                </div>
                <p>Create your brand awareness on campus</p>
              </div>
            </div>
          </div>
        </vue-slick-carousel>
      </div>
      <form class="rhs">
        <h2>
          Hi there, <br />
          let's get you started
        </h2>
        <vue-slick-carousel
          class="swiper-wrapper"
          :arrows="false"
          :dots="false"
          :autoplay="false"
          :infinite="false"
        >
          <div>
            <br />
            <div class="input-div" @click="setLabelToActive($event)">
              <label for="uName"
                ><i class="bi bi-person"></i> Enter a fancy username</label
              >
              <input
                id="uName"
                v-model="form.username"
                type="text"
                name="username"
                value=""
                required
                @input="validateForm($event)"
              />
            </div>
            <div class="validation-rules">
              <div class="validation">
                <span
                  class="icon bi bi-check"
                  :class="validation.name ? 'valid' : ''"
                ></span>
                <span>No special character/ space except "_"</span>
              </div>
              <div class="validation">
                <span
                  class="icon bi bi-check"
                  :class="validation.name ? 'valid' : ''"
                ></span>
                <span>Don't end with "_" or space</span>
              </div>
            </div>
          </div>
          <div v-if="[validation.name].includes(true)">
            <br />
            <p><b>Enter your email</b></p>
            <br />
            <div class="input-div" @click="setLabelToActive($event)">
              <label for="email"><i class="bi bi-envelope"></i> Email</label>
              <input
                v-model="form.email"
                required
                type="email"
                name="email"
                value=""
                autocomplete="email"
                @input="validateForm($event)"
              />
            </div>
            <div class="validation-rules">
              <div class="validation">
                <span
                  class="icon bi bi-check"
                  :class="validation.email ? 'valid' : ''"
                ></span>
                <span>Valid email</span>
              </div>
            </div>
          </div>
          <div v-if="[validation.name, validation.email].includes(true)">
            <br />
            <p><b>Enter your phone number</b></p>
            <br />
            <div class="input-div" @click="setLabelToActive($event)">
              <label for="mobile_number"
                ><i class="bi bi-telephone"></i> Phone number</label
              >
              <input
                v-model="form.mobile_number"
                required
                type="text"
                name="mobile_number"
                maxlength="11"
                value=""
                @input="validateForm($event)"
              />
            </div>
            <div class="validation-rules">
              <div class="validation">
                <span class="icon bi bi-check"></span>
                <span>Valid phone number</span>
              </div>
            </div>
          </div>
          <div
            v-if="
              [
                validation.name,
                validation.email,
                validation.phone_number,
              ].includes(true)
            "
          >
            <br />
            <p><b>Enter your password</b></p>
            <br />
            <div class="input-div" @click="setLabelToActive($event)">
              <label for="password"><i class="bi bi-lock"></i> Password</label>
              <input
                id="password"
                v-model="form.password"
                required
                :type="!showPassword ? 'password' : 'text'"
                name="password"
                autocomplete="new-password"
              />
              <button
                id="show-password"
                type="button"
                @click="showPassword = !showPassword"
              >
                <span v-if="!showPassword"><i class="bi bi-eye"></i></span
                ><span v-else><i class="bi bi-eye-slash"></i></span>
              </button>
            </div>
            <div class="validation-rules">
              <div class="validation">
                <span class="icon bi bi-check"></span>
                <span>Minimum of 8 letters</span>
              </div>
              <div class="validation">
                <span class="icon bi bi-check"></span>
                <span>Contains a capital letter</span>
              </div>
              <div class="validation">
                <span class="icon bi bi-check"></span>
                <span>Contains a special character</span>
              </div>
            </div>
          </div>
        </vue-slick-carousel>
        Add Pagination
        <div class="swiper-pagination swiper-pagination-white"></div>
        Add Arrows
        <div class="swiper-div">
          <div class="swiper-button-next swiper-button-white"></div>
          <div class="swiper-button-prev swiper-button-white"></div>
        </div>
      </form>
    </div>
  </div> -->
</template>
<script>
// Can also be included with a regular script tag
// import Typed from 'typed.js'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style forarrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import $ from 'jquery'
import User from '@/assets/js/api/User'
import regex from '@/assets/js/regex'
import Csrf from '~/assets/js/api/Csrf'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { VueSlickCarousel },
  // middleware: ['auth'],
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        mobile_number: '',
        device_name: 'fuoye360_webapp',
      },
      showPassword: false,
      loading: false,

      validUsername: '',
      validTelephone: '',
      validEmail: '',
      validPassword: '',
      validation: {
        name: false,
        email: false,
        phone_number: false,
        password: false,
      },
    }
  },
  head() {
    return {
      title: 'FUOYE360 REGISTER | Join other awesome users',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'FUOYE360 REGISTER | Join other awesome users',
        },
      ],
    }
  },
  mounted() {
    $('.form-container input, .form-container textarea').on(
      'focusin',
      function () {
        $(this).parent().find('label').addClass('active')
      }
    )
    $('.form-container input, .form-container textarea').on(
      'focusout',
      function () {
        if (!this.value) {
          $(this).parent().find('label').removeClass('active')
        }
      }
    )
    $('#uName').keyup(function () {
      this.value = this.value.replace(/ /g, '_')
    })
    $('.form-container label').click(function () {
      $(this).parent().find('input').focus()
    })
  },
  methods: {
    setLabelToActive(e) {
      return true
      // if (
      //   $(e.target).closest('label').length === 1 ||
      //   $(e.target).closest('input').length === 1
      // ) {
      //   $(e.target).closest('label').addClass('active')
      // }
    },
    validateForm(e) {
      const formInput = e.target.name
      if (formInput === 'username') {
        if (regex.username(e.target.value)) {
          return (this.validation.name = false)
        }
        return (this.validation.name = true)
      } else if (formInput === 'mobile_number') {
        if (regex.telephone(e.target.value)) {
          return (this.validation.phone_number = true)
        }
        return (this.validation.phone_number = false)
      } else if (formInput === 'email') {
        if (regex.email(e.target.value)) {
          return (this.validation.email = true)
        }
        return (this.validation.email = false)
      } else if (formInput === 'location') {
        if (regex.location(e.target.value)) {
          return (this.validLocation = false)
        }
        return (this.validLocation = true)
      } else if (formInput === 'password') {
        if (regex.password(e.target.value)) {
          return (this.validPassword = false)
        }
        return (this.validPassword = true)
      } else if (formInput === 'password_confirmation') {
        regex.confirmPassword()
      }
    },
    async register() {
      this.loading = true

      await User.register(this.form)
        .then(async () => {
          Csrf.getCookie(true)
          await this.$store.dispatch('user/getCurrentUser')
          localStorage.setItem('auth', 'true')
          if (this.$route.query.redirect !== undefined) {
            this.$router.push(this.$route.query.redirect)
          } else {
            this.$router.push('/shop')
          }
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', {
            status: err.response.status,
            errors: err.response.data,
          })
        })
      this.loading = false
    },
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
  color: var(--white);
}
</style>
