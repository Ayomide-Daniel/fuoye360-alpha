<template>
  <div class="wrapper">
    <div class="return-home">
      <nuxt-link :to="{ name: 'index' }"
        ><i class="fas fa-home"></i> GO BACK HOME</nuxt-link
      >
    </div>
    <br /><br />

    <div class="form-container lg-container" style="background: none">
      <div style="padding: 1rem" class="form-img-div">
        <img
          loading="lazy"
          :src="require('@/assets/illustrations/forgot-password-animate.svg')"
          alt="forgot-password-animation"
        />
        <div class="div-header">
          <h3 class="div-meta">
            Forgot your password? Don't worry, we've got you covered!
          </h3>
          <span class="hr-line"></span>
        </div>
      </div>
      <form @submit.prevent="sendPasswordResetLink">
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
        <button
          :class="loading ? 'loading-btn' : ''"
          type="submit"
          name="signup-btn"
          style="margin-top: 0.25rem"
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
          <span v-else>Send Reset Password Link</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import User from '@/assets/js/api/User'
import regex from '@/assets/js/regex'

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
      showPassword: false,
      validEmail: '',
      loading: false,
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
          content: 'FUOYE360  | Reset Password',
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
        if (regex.email(e.target.value)) {
          return (this.validEmail = true)
        }
        return (this.validEmail = false)
      }
    },
    async sendPasswordResetLink() {
      this.loading = true
      await User.sendPasswordResetLink(this.form)
        .then((res) => {
          this.$root.$emit('alertNotification', res.data)
          this.$router({ name: 'auth-password-reset' })
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', err.response.status)
        })
      this.loading = false
    },
  },
}
</script>
