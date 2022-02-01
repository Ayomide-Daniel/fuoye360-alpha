<template>
  <div>
    <section>
      <div
        :style="`background-image: url(${require('~/assets/images/megaphone-removebg-preview.png')})`"
        class="lhs-container"
      >
        <v-container>
          <img
            :src="require('~/assets/images/360logo.png')"
            alt="fuoye360-logo"
            height="50"
          />
        </v-container>
      </div>
      <div class="form-container">
        <h1>
          Hey there 👋, <br />
          Let’s get you started, shall we?
        </h1>
        <form class="highlight-container auth-container">
          <div class="btn-div">
            <button
              class="btn default-btn auth-btn"
              @click.prevent="handleAuth"
            >
              <img
                class="icon"
                :src="require('~/assets/images/google.png')"
                alt="sign-in-with-google"
              />
              Sign in with Google
            </button>

            <button id="buttonDiv"></button>
          </div>

          <!-- <label for="name">Enter a fancy username</label>
          <div class="input-div">
            <span><i class="bi bi-at"></i></span>
            <input id="" type="text" name="" />
          </div> -->
        </form>
        <div class="login-div">
          Already have an account? <a href="">Login</a>
        </div>
        <!-- <div class="btn-div">
          <button class="btn default-btn">BACK</button>
          <button class="btn fill-btn">NEXT</button>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script src="https://accounts.google.com/gsi/client" async defer></script>
<script>
/* eslint-disable no-undef */
export default {
  name: 'Alpha',
  // auth: 'guest',
  mounted() {
    window.onload = function () {
      google.accounts.id.initialize({
        client_id:
          '22203556179-kkgklgd6rdg5trqllb49g1n2edas9rd0.apps.googleusercontent.com',
        callback: this.handleCredentialResponse(),
      })
      google.accounts.id.renderButton(
        document.getElementById('buttonDiv'),
        { theme: 'outline', size: 'large' } // customization attributes
      )
      google.accounts.id.prompt() // also display the One Tap dialog
    }
  },
  methods: {
    handleCredentialResponse(response) {
      console.log('Encoded JWT ID token:' + response.credential)
    },
    async handleAuth() {
      await this.$auth.loginWith('google', {
        params: { prompt: 'select_account' },
      })

      // const googleUser = await this.$gAuth.signIn()
      // googleUser.getId() : Get the user's unique ID string.
      // googleUser.getBasicProfile() : Get the user's basic profile information.
      // googleUser.getAuthResponse() : Get the response object from the user's auth session. access_token and so on
      // this.isSignIn = this.$gAuth.isAuthorized
      // const authCode = await this.$gAuth.getAuthCode()
      // console.log('authCode', authCode)
      // console.log('googleUser', googleUser)
    },
  },
}
</script>

<style scoped>
section {
  background: #f4f4f4;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* justify-items: center; */
}

.form-container {
  align-self: center;
  justify-self: center;
  padding: 1rem;
}
.form-container h1 {
  font-size: 30px;
  color: #0f3e0f;
  margin: 2rem 0;
}
.form-container form {
  min-height: 300px;
  background: #fff;
  border-radius: 0.75rem;
}

.btn-div {
  margin-top: 0.5rem;
}

.btn-div .btn {
  padding: 0.5rem;
  width: 120px;
  font-size: 0.95rem;
  font-weight: bold;
}

form .input-div {
  border: 1px solid #f4f4f4;
}
form .input-div:active,
form .input-div:focus {
  border: 1px solid var(--brand-color);
}

.input-div span {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #32cd32;
  color: #fff;
  font-weight: bold;
  height: 50px;
}
form input {
  padding: 1.5rem;
  border: none;
  color: #0f3e0f !important;
  height: 50px;
  width: 400px;
}
input:focus {
  border: none !important;
}
.login-div {
  padding: 1rem 0;
}

.login-div a {
  color: #32cd32;
  font-weight: bold;
}

.lhs-container {
  background-position: center;
  background-size: 40%;
  background-position-x: 0%;
  background-position-y: 100%;
}

.lhs-container img {
  width: auto;
  height: 75px;
}

form img {
  display: block;
  height: 40px;
  width: auto;
}

.auth-btn {
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-container {
  display: flex;
  align-self: center;
  justify-content: center;
}
</style>
