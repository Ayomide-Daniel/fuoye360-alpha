<template>
  <div class="wrapper">
    <div class="return-home">
      <nuxt-link to="/"><i class="fas fa-home"></i> GO BACK HOME</nuxt-link>
    </div>
    <br /><br />
    <div class="form-container lg-container" style="background: none">
      <div style="padding: 1rem" class="form-img-div">
        <img
          loading="lazy"
          :src="require('@/assets/illustrations/team-spirit-animate.svg')"
          alt=""
        />
        <div class="div-header">
          <h3 class="div-meta">
            Welcome Back! Login to connect with other awesome users
          </h3>
          <span class="hr-line"></span>
        </div>
      </div>
      <form @submit.prevent="login">
        <div class="input-div">
          <label for="email"><i class="fas fa-envelope"></i> Email</label>
          <input
            v-model="form.email"
            required
            type="text"
            name="email"
            value=""
            @input="validateForm($event)"
          />
          <div
            v-if="validEmail !== ''"
            class="form-validation"
            :class="validEmail ? 'valid' : 'invalid'"
          >
            <span v-if="validEmail">&check;</span><span v-else>&times;</span>
          </div>
        </div>
        <div class="input-div">
          <label for="password"><i class="fas fa-lock"></i> Password</label>
          <input
            id="password"
            v-model="form.password"
            required
            :type="!showPassword ? 'password' : 'text'"
            name="password"
          />
          <button
            id="show-password"
            type="button"
            @click="showPassword = !showPassword"
          >
            <span v-if="!showPassword"><i class="fas fa-eye"></i></span
            ><span v-else><i class="fas fa-eye-slash"></i></span>
          </button>
        </div>
        <div>
          <input id="remember" type="checkbox" name="remember" />
          <label for="remember"> Remember Me </label>
        </div>
        <button
          :class="loading ? 'loading-btn' : ''"
          type="submit"
          name="login-btn"
          :style="loading || [validEmail].includes(false) ? 'opcaity:.75' : ''"
          :disabled="loading || [validEmail].includes(false)"
        >
          <span v-if="loading"
            ><v-progress-circular
              indeterminate
              color="white"
              width="3"
              size="20"
            ></v-progress-circular
          ></span>
          <span v-else>Login</span>
        </button>
        <div>
          <p>
            <nuxt-link
              :to="{
                name: 'auth-register',
                query: { redirect: $route.query.redirect },
              }"
              href=""
              >Don't have an account yet?</nuxt-link
            >
          </p>
          <p>
            <nuxt-link :to="{ name: 'auth-password-email' }"
              >Forgot your password?</nuxt-link
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import User from '@/assets/js/api/User'
import Regex from '@/assets/js/regex'
import Csrf from '~/assets/js/api/Csrf'

export default {
  // middleware: ['auth'],
  data() {
    return {
      form: {
        email: '',
        password: '',
        device_name: 'fuoye360_webapp',
      },
      showPassword: false,
      loading: false,
      validEmail: '',
      validPassword: '',
    }
  },
  head() {
    return {
      title: 'FUOYE360 LOGIN | Welcome back',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'FUOYE360 LOGIN | Welcome back',
        },
      ],
    }
  },
  computed: {
    auth() {
      return this.$store.state.user.authenticated
    },
  },
  watch: {
    auth() {
      if (this.auth) {
        if (this.$route.query.redirect !== undefined) {
          return this.$router.push(this.$route.query.redirect)
        } else {
          return this.$router.push({ name: 'shop' })
        }
      }
    },
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
    validateForm(e) {
      const formInput = e.target.name
      if (formInput === 'email') {
        if (Regex.email(e.target.value)) {
          return (this.validEmail = true)
        }
        return (this.validEmail = false)
      }
    },
    async login() {
      this.loading = true
      await User.login(this.form)
        .then(async () => {
          Csrf.getCookie(true)
          await this.$store.dispatch('user/getCurrentUser')
          localStorage.setItem('auth', 'true')
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
