<template>
  <div class="wrapper">
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
      <v-container class="rhs">
        <h2>
          Hi there, <br />
          let's get you started
        </h2>
        <!-- <vue-slick-carousel
          class="swiper-wrapper"
          :arrows="false"
          :dots="false"
          :autoplay="false"
          :infinite="false"
        > -->
        <!-- <div> -->
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
        <!-- </div> -->
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
      </v-container>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style forarrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Test',
  components: { VueSlickCarousel },
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
}
</script>

<style scoped></style>
