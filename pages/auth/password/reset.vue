<template>
  <div class="wrapper">
    <div class="return-home">
      <router-link :to="{ name: 'index' }"
        ><i class="fas fa-home"></i> GO BACK HOME</router-link
      >
    </div>
    <br /><br />

    <div class="form-container lg-container" style="background: none">
      <div style="padding: 1rem" class="form-img-div">
        <img
          loading="lazy"
          :src="require('@/assets/illustrations/forgot-password-animate.svg')"
          alt="reset-password-animation"
        />
        <div class="div-header">
          <h3 class="div-meta">
            Forgot your password? Don't worry, we've got you covered!
          </h3>
          <span class="hr-line"></span>
        </div>
      </div>
      <form @submit.prevent="resetPassword($event)">
        <input type="hidden" name="token" :value="$route.params.token" />
        <div class="input-div">
          <label for="email"><i class="fas fa-envelope"></i> Email</label>
          <input
            required
            type="text"
            name="email"
            :value="$route.params.email !== '' ? $route.params.email : ''"
            autofocus
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
          <small
            v-if="!validPassword"
            style="position: absolute; bottom: -20px; color: red"
            >*Password must be more than 8 characters</small
          >
        </div>
        <div class="input-div">
          <label for="password"
            ><i class="fas fa-lock"></i> Confirm Password</label
          >
          <input
            id="password-confirm"
            v-model="form.password_confirmation"
            required
            :type="!showPassword ? 'password' : 'text'"
            name="password_confirmation"
          />
          <button
            id="show-password"
            type="button"
            @click="showPassword = !showPassword"
          >
            <span v-if="!showPassword"><i class="fas fa-eye"></i></span
            ><span v-else><i class="fas fa-eye-slash"></i></span>
          </button>
          <div
            v-if="validConfirmPassword !== ''"
            class="form-validation"
            :class="validConfirmPassword ? 'valid' : 'invalid'"
          >
            <span v-if="validConfirmPassword">&check;</span
            ><span v-else>&times;</span>
          </div>
        </div>
        <button
          :class="loading ? 'loading-btn' : ''"
          type="submit"
          name="signup-btn"
          style="margin-top: 0.25rem"
          :style="
            loading ||
            [validEmail, validPassword, validConfirmPassword].includes(false) ||
            !$route.params.token
              ? 'opcaity:.75'
              : ''
          "
          :disabled="
            loading ||
            [validEmail, validPassword, validConfirmPassword].includes(false) ||
            !$route.params.token
          "
        >
          <span v-if="loading"
            ><v-progress-circular
              indeterminate
              color="white"
              width="3"
              size="20"
            ></v-progress-circular
          ></span>
          <span v-else>Reset Password</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import User from '@/assets/js/api/User'
import Regex from '@/assets/js/regex'
export default {
  // middleware: ['auth'],
  data() {
    return {
      form: {
        email: '',
        password: '',
        password_confirmation: '',
        device_name: 'fuoye360_webapp',
      },
      loading: false,
      showPassword: false,
      validEmail: '',
      validPassword: '',
      validConfirmPassword: '',
      title: 'FUOYE360 | Reset your password',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'FUOYE360 | Reset Password',
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
    $('.form-container label').click(function () {
      $(this).parent().find('input').focus()
    })
  },
  methods: {
    validateForm(e) {
      const formInput = e.target.name
      if (formInput === 'email') {
        if (Regex.email(e.target.value)) {
          return (this.validEmail = false)
        }
        return (this.validEmail = true)
      } else if (formInput === 'password') {
        if (Regex.password(e.target.value)) {
          return (this.validPassword = false)
        }
        return (this.validPassword = true)
      } else if (formInput === 'password_confirmation') {
        if (
          Regex.confirmPassword(
            this.form.password,
            this.form.password_confirmation
          )
        ) {
          return (this.validConfirmPassword = true)
        }
        return (this.validConfirmPassword = false)
      }
    },
    async resetPassword(e) {
      this.loading = true
      const fd = new FormData(e.target)
      await User.resetPassword(fd)
        .then((res) => {
          this.$router.push({ name: 'login' })
          this.$root.$emit('alertNotification', res.data)
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', err.response.status)
        })
      this.loading = false
    },
  },
}
</script>
