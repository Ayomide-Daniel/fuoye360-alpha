<template>
  <div>
    <div
      v-if="!profile_card_hide"
      id="profile-wrap"
      class="vs-wrapper"
      style="z-index: 10"
      @click="toggleProfileState($event)"
    >
      <div class="vs-container">
        <div class="vs-content profile-card">
          <div class="image-div">
            <img
              class="profile-image"
              loading="lazy"
              :src="$asset(`storage/profile_images/${user.image}`)"
              alt="profile-image"
            />
            <button style="margin-left: 1rem" @click="showEditProfile">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </div>
          <div style="margin: 0 auto; text-align: center">
            <div style="display: flex; justify-content: center">
              <h2>Dan Brown</h2>
            </div>
            <p>@{{ user.name }}</p>
            <p>{{ user.bio }}</p>
            <p class="profile-details">
              <span class="lhs-details"
                ><i
                  style="color: var(--brand-color)"
                  class="fas fa-map-marker-alt"
                ></i>
                {{ user.geo_location }}</span
              >
              <span class="rhs-details"
                ><b
                  ><i
                    style="color: var(--brand-color)"
                    class="fas fa-phone-alt"
                  ></i
                ></b>
                {{ user.telephone }}
              </span>
            </p>
            <p class="profile-details">
              <nuxt-link
                :to="{
                  name: 'username',
                  params: { username: user.name },
                  query: { v: 'following' },
                }"
                class="lhs-details"
                ><b>{{ user.following }} </b>Following</nuxt-link
              >
              <nuxt-link
                :to="{
                  name: 'username',
                  params: { username: user.name },
                  query: { v: 'follower' },
                }"
                class="rhs-details"
                ><b>{{ user.followers }} </b>
                Followers
              </nuxt-link>
            </p>
            <p>
              <span class="total-views">
                <i class="fas fa-eye"></i> {{ user.total_views }} views
              </span>
            </p>
          </div>
          <form>
            <div class="profile-bar">
              <div
                class="profile-bar"
                style="
                  border-bottom: 1px solid var(--input-border-color);
                  padding: 0.25rem 0;
                "
              >
                <nuxt-link
                  :to="{ name: 'create-ad' }"
                  :class="
                    $route.name == 'create-ad' ? 'profileNav-selected' : ''
                  "
                  class="create-ad"
                  ><i class="fas fa-ad" style="position: relative"></i> Create
                  Ad</nuxt-link
                >
                <nuxt-link
                  :to="{ name: 'dashboard-notifications' }"
                  :class="
                    $route.name == 'dashboard-notifications'
                      ? 'profileNav-selected'
                      : ''
                  "
                  class="create-ad"
                  ><i class="fas fa-bell"></i> Notifications</nuxt-link
                >
              </div>
              <div
                v-if="
                  [
                    'shop',
                    'shop-buy',
                    'shop-inventory',
                    'shop-wishlist',
                  ].includes($route.name)
                "
                class="profile-bar"
              >
                <nuxt-link
                  :to="{ name: 'shop-buy' }"
                  :class="
                    $route.name == 'shop-buy' ? 'profileNav-selected' : ''
                  "
                  ><i class="fas fa-cart-plus"></i> Buy</nuxt-link
                >
                <nuxt-link
                  :to="{ name: 'shop' }"
                  :class="$route.name == 'shop' ? 'profileNav-selected' : ''"
                  ><i class="fas fa-heart"></i> Following</nuxt-link
                >
                <nuxt-link
                  :to="{ name: 'shop-inventory' }"
                  :class="
                    $route.name == 'shop-inventory' ? 'profileNav-selected' : ''
                  "
                  ><i class="fas fa-store"></i> Inventory</nuxt-link
                >
                <nuxt-link
                  :to="{ name: 'shop-wishlist' }"
                  :class="
                    $route.name == 'shop-wishlist' ? 'profileNav-selected' : ''
                  "
                  ><i class="fas fa-bookmark"></i> Wishlist</nuxt-link
                >
              </div>
              <div
                v-else-if="
                  [
                    'broadcast',
                    'broadcast-trending',
                    'broadcast-status-id',
                    'broadcast-bookmarks',
                  ].includes($route.name) || $route.query.v == 'broadcast'
                "
                class="profile-bar"
              >
                <button
                  type="button"
                  class="blog-broadcast"
                  @click="newBroadcast"
                >
                  <i class="fas fa-bullhorn"></i> Broadcast
                </button>
                <nuxt-link
                  :to="{ name: 'broadcast' }"
                  :class="
                    $route.name == 'broadcast' ? 'profileNav-selected' : ''
                  "
                  ><i class="fas fa-heart"></i> Following</nuxt-link
                >
                <nuxt-link
                  :to="{ name: 'broadcast-trending' }"
                  :class="
                    $route.name == 'broadcast-trending'
                      ? 'profileNav-selected'
                      : ''
                  "
                  ><i class="fas fa-fire"></i> Trending</nuxt-link
                >
                <nuxt-link
                  :to="{ name: 'broadcast-bookmarks' }"
                  :class="
                    $route.name == 'broadcast-bookmarks'
                      ? 'profileNav-selected'
                      : ''
                  "
                  ><i class="fas fa-bookmark"></i> Bookmarks</nuxt-link
                >
              </div>
              <a href="#" class="logout-form" @click.prevent="logout">
                <i class="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <section v-if="!profile_form_hide" id="edit-profile-div" class="vs-wrapper">
      <div class="vs-container">
        <div class="vs-content">
          <form
            class="profile-form"
            enctype="multipart/form-data"
            @submit.prevent="editProfile($event)"
          >
            <div class="profile-form-header">
              <h3>Edit Profile</h3>
              <button
                type="submit"
                class="profile-form-submit"
                :disabled="
                  form.location.length <= 0 ||
                  form.telephone.length <= 0 ||
                  !validTelephone ||
                  !validLocation ||
                  loading
                "
                :style="
                  form.location.length <= 0 ||
                  form.telephone.length <= 0 ||
                  !validTelephone ||
                  !validLocation ||
                  loading
                    ? 'opacity: .75;'
                    : ''
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
                <span v-else>SAVE</span>
              </button>
            </div>
            <div class="profile-form-content">
              <div class="image-container">
                <input
                  id="profile-image"
                  type="file"
                  name="image"
                  style="display: none"
                  accept=".jpeg, .jpg, .png"
                  @change="displayImage($event)"
                />
                <img
                  id="profile-display"
                  loading="lazy"
                  :src="$asset('storage/profile_images/' + user.image)"
                  :alt="user.name"
                  class="profile-display"
                />
                <div class="edit-profile-image-div" @click="triggerclick">
                  <button type="button"><i class="fas fa-camera"></i></button>
                </div>
                <small>*Click to change your Profile Picture</small>
              </div>
              <br />
              <div class="profile-form-info">
                <div class="input-div">
                  <label class="shop-label">USER</label>
                  <span
                    class=""
                    style="margin-left: 0.25rem; font-weight: bold"
                    >{{ user.name }}</span
                  >
                </div>
                <div class="input-div">
                  <label class="shop-label">LOCATION</label>
                  <input
                    id="geo_location"
                    v-model="form.location"
                    type="text"
                    name="location"
                    class="glocation"
                    @input="validateForm($event)"
                  />
                  <div
                    v-if="validLocation !== ''"
                    class="form-validation"
                    :class="validLocation ? 'valid' : 'invalid'"
                  >
                    <span v-if="validLocation">&check;</span
                    ><span v-else>&times;</span>
                  </div>
                </div>
                <div class="input-div">
                  <label class="shop-label">PHONE NO</label>
                  <input
                    id="mobile_number"
                    v-model="form.telephone"
                    class="telephone"
                    type="text"
                    name="telephone"
                    maxlength="11"
                    @input="validateForm($event)"
                  />
                  <div
                    v-if="validTelephone !== ''"
                    class="form-validation"
                    :class="validTelephone ? 'valid' : 'invalid'"
                  >
                    <span v-if="validTelephone">&check;</span
                    ><span v-else>&times;</span>
                  </div>
                </div>
                <div class="profile-bio">
                  <h3 class="shop-label" style="">BIO</h3>
                  <div class="input-div">
                    <textarea v-model="form.bio" class="bio" name="bio">
                    </textarea>
                  </div>
                </div>
              </div>
              <div class="close-profile-div">
                <button
                  type="button"
                  class="close-profile-form"
                  @click="hideProfileEditForm"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  style="background: var(--brand-color); color: white"
                  :disabled="
                    form.location.length <= 0 ||
                    form.telephone.length <= 0 ||
                    !validTelephone ||
                    !validLocation ||
                    loading
                  "
                  :style="
                    form.location.length <= 0 ||
                    form.telephone.length <= 0 ||
                    !validTelephone ||
                    !validLocation ||
                    loading
                      ? 'opacity: .75;'
                      : ''
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
                  <span v-else>SAVE</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import User from '@/assets/js/api/User'
import Regex from '@/assets/js/regex'

export default {
  name: 'ProfileComponent',
  data() {
    return {
      profile_form_hide: true,
      image: null,
      profile_card_hide: true,
      loading: false,
      validTelephone: '',
      validLocation: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
    form() {
      return {
        name: this.user.name,
        location: this.user.geo_location,
        telephone: this.user.telephone,
        bio: this.user.bio,
      }
    },
  },
  mounted() {
    this.$root.$on('profileCardShow', () => {
      this.profile_card_hide = false
    })
    this.$root.$on('routeChanged', () => {
      this.profile_card_hide = true
      this.$root.$emit('hideProfileCard')
    })
    if (Regex.telephone(this.user.telephone)) {
      this.validTelephone = true
    } else {
      this.validTelephone = false
    }
    if (Regex.location(this.user.location)) {
      this.validLocation = true
    } else {
      this.validLocation = false
    }
  },
  methods: {
    hideProfileEditForm() {
      this.profile_form_hide = !this.profile_form_hide
      this.profile_card_hide = !this.profile_card_hide
    },
    toggleProfileState(e) {
      if (
        $(e.target).closest('.profile-card').length === 0 &&
        $(e.target).closest('.profile-help').length === 0
      ) {
        this.profile_card_hide = !this.profile_card_hide
        this.$root.$emit('hideProfileCard')
      }
    },
    showEditProfile() {
      this.profile_form_hide = false
      this.profile_card_hide = true
    },
    editProfile(e) {
      this.loading = true
      User.updateProfile(new FormData(e.target))
        .then(() => {
          this.loading = false
          this.profile_card_hide = false
          this.profile_form_hide = true
          this.$store.dispatch('user/getCurrentUser')
          this.$root.$emit('hideProfileCard')
          this.$root.$emit('alertNotification', { message: 'Profile Updated' })
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.response.status })
        })
    },
    logout() {
      this.$root.$emit('logout')
    },
    newBroadcast() {
      this.$root.$emit('showModal', { tweet: '', type: '', modal: 'broadcast' })
      this.$root.$emit('hideProfileCard')
      return (this.profile_card_hide = true)
    },
    triggerclick() {
      $('#profile-image').click()
    },
    async displayImage(data) {
      if (data.target.files[0]) {
        const reader = await new FileReader()
        await reader.readAsDataURL(data.target.files[0])
        reader.onload = await function (event) {
          const imgElement = document.createElement('img')
          imgElement.src = event.target.result
          imgElement.onload = function (e) {
            const canvas = document.createElement('canvas')
            const MAX_WIDTH = 400
            const scaleSize = MAX_WIDTH / e.target.width
            canvas.width = MAX_WIDTH
            canvas.height = e.target.height * scaleSize
            const ctx = canvas.getContext('2d')
            ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height)

            const srcEncoded = ctx.canvas.toDataURL(e.target, 'image/jpeg')
            const profileDisplay = document.querySelectorAll('#profile-display')
            for (let i = 0; i < profileDisplay.length; i++) {
              $(profileDisplay[i]).attr('src', srcEncoded)
            }
            this.image = JSON.stringify(srcEncoded)
          }
        }
      }
    },
    validateForm(e) {
      const formInput = e.target.name
      if (formInput === 'telephone') {
        if (Regex.telephone(e.target.value)) {
          return (this.validTelephone = true)
        }
        return (this.validTelephone = false)
      }
      if (formInput === 'location') {
        if (Regex.location(e.target.value)) {
          return (this.validLocation = true)
        }
        return (this.validLocation = false)
      }
    },
  },
}
</script>

<style scoped>
.profile-form-header {
  display: flex;
  padding: 0.5rem;
  position: relative;
  align-items: center;
}

.profile-form-header h3 {
  margin-left: 0.5rem;
}

.profile-form-submit {
  background: var(--brand-color);
  color: var(--white-color);
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 1rem;
  width: 35%;
  font-size: inherit;
  border: none;
  position: absolute;
  right: 5px;
}

.profile-form-content .image-container {
  position: relative;
  border-bottom: 2px solid #444;
}

.edit-profile-image-div button {
  border: none;
  color: var(--brand-color);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  background-color: rgba(1, 1, 1, 0.15);
  top: 0;
  left: 0;
  right: 0;
  font-size: 1.2rem;
}

.profile-form-info div {
  margin-bottom: 0.5rem;
}

.profile-form-info input {
  border: none;
  border: 1px solid var(--input-border-color);
  padding: 0.4rem;
  font: inherit;
  border-radius: 0.3rem;
}

.profile-form-info sup {
  color: var(--red-color);
  font-size: 1.2rem;
}

.profile-form-content .close-profile-div {
  display: flex;
  justify-content: center;
}

.close-profile-div button {
  border: 1px solid var(--brand-color);
  color: var(--brand-color);
  background: var(--white-color);
  padding: 0.4rem;
  font: inherit;
  font-weight: bold;
  width: 45%;
  margin: 0 0.5rem;
  border-radius: 1rem;
}

.profile-bio {
  margin: 0 auto;
}

.profile-bio h3 {
  text-align: center;
  color: var(--brand-color);
  padding: 0.5rem;
  border-radius: 0.3rem;
  font: inherit;
  font-weight: bold;
  border: 1px solid var(--brand-color);
}

.profile-bio div {
  display: flex;
  width: inherit;
  margin-top: 0.3rem;
}

.profile-form-info textarea {
  line-height: 1.4rem;
  border: none;
  padding: 0.3rem;
  font: inherit;
  border-radius: 0.3rem;
  resize: none;
  height: 100px;
  border: 1px solid var(--input-border-color);
  margin: 0 auto;
  width: 100%;
}

/* .profile-help {
  z-index: 99999;
  position: fixed;
  top: 95px;
  right: 25px;
  background: linear-gradient(45deg, tomato, gold);
  border-radius: 50%;
}

.phelp-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.25rem solid transparent;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: var(--white-color);
  cursor: pointer;
}

.phelp-content::before,
.phelp-content::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  opacity: 0;
  border-radius: 50%;
  border: 0.25rem solid #f17f1be7;
  animation: glow 3s linear infinite;
  padding: 1rem;
  -webkit-animation: glow 3s linear infinite;
}

.phelp-content::before {
  animation-delay: 1.4s;
}

@keyframes glow {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
} */

#profile-wrap .profile-card {
  box-sizing: border-box;
  padding: 0.5em;
  width: 90%;
  max-width: 425px;
  margin: 0 0.5rem;
  margin-top: 1rem;
  border-radius: 1rem 1rem 0 0;
  background: var(--white-color);
}

@media screen and (max-width: 425px) {
  #profile-wrap .profile-card {
    width: 100%;
  }
}

.image-container .profile-display {
  object-fit: cover;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}

.profile-form label {
  font: inherit;
  font-weight: 700;
  margin: 0;
  padding: 0.5rem;
  border: 1px solid var(--brand-color);
  color: var(--brand-color);
  border-radius: 0.3rem;
}

.profile-form .input-div {
  position: relative;
  white-space: nowrap;
  width: inherit;
  display: flex;
  align-items: center;
}

.profile-form .input-div input {
  display: inline-block;
  width: 100%;
  margin-left: 0.25rem;
}

.profile-form .input-div input,
.profile-form .input-div textarea {
  background: var(--white-color);
  font: inherit;
  padding: 0.5rem;
}

form select {
  font-size: inherit;
}

form .phone-no,
form .location {
  margin-top: 0.3rem;
  border: 1px solid var(--brand-color);
  font-size: inherit;
  margin: 0;
  padding: 0.1rem 0.3rem;
  letter-spacing: 0.05rem;
}

textarea {
  font-family: inherit;
  font-size: inherit;
}

.bio:focus {
  box-shadow: none;
  border-bottom: 1px solid green;
}

.profile-bar {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.3rem;
}
.profile-bar a,
.profile-bar button {
  font: inherit;
  background: none;
  display: block;
  border: none;
  text-align: left;
  border-radius: 1rem;
  text-decoration: none;
  margin: 0;
  text-indent: 0.2rem;
  padding: 0.5rem 0.2rem;
  color: #068806;
  opacity: 0.5;
  text-transform: uppercase;
  font-weight: bold;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}
.profile-bar a:hover {
  background: var(--white-color);
  opacity: 1;
}

.profile-bar .profileNav-selected {
  background: var(--white-color);
  opacity: 1;
}

.profile-bar .logout-form {
  color: var(--red-color);
}

.image-div {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: -15% auto 1.2rem;
  padding: 0.25rem;
  background: var(--white-color);
  position: relative;
}
.image-div img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0px auto;
  object-fit: cover;
  object-position: center;
}

.image-div button {
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid var(--brand-color);
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--brand-color);
  color: var(--white-color);
  border-radius: 50%;
}
.total-views {
  background: var(--highlight-color);
  color: var(--white-color);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
}

.profile-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.lhs-details {
  justify-self: center;
  text-decoration: none;
  color: inherit;
}
.rhs-details {
  justify-self: center;
  text-decoration: none;
  color: inherit;
}
</style>
