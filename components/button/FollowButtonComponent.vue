<template>
  <div v-if="account.id !== user.id" style="width: inherit">
    <button
      :class="account.is_following ? 'unfollow-btn' : 'follow-btn'"
      @click="checkAction"
    >
      <span v-if="loading">
        <v-progress-circular
          indeterminate
          color="white"
          width="3"
          size="20"
        ></v-progress-circular
      ></span>
      <span v-else-if="d_account.is_following">Unfollow</span
      ><span v-else>Follow</span>
    </button>
  </div>
</template>

<script>
import Action from '~/assets/js/api/Action'
export default {
  name: 'FollowButtonComponent',
  props: ['account'],
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
    d_account() {
      return this.account
    },
  },
  methods: {
    checkAction() {
      if (this.account.is_following) {
        return this.unfollow()
      }
      return this.follow()
    },
    unfollow() {
      Action.unfollow(this.account.id)
        .then((res) => {
          this.d_account.is_following = false
          this.$root.$emit('removeSellerProducts', this.account.id)
          this.$root.$emit('updateInfluenceCount', res.data.data)
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.data.status })
        })
    },
    follow() {
      Action.follow(this.account.id)
        .then((res) => {
          this.d_account.is_following = true
          this.$root.$emit('updateInfluenceCount', res.data.data)
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.data.status })
        })
    },
  },
}
</script>

<style scoped>
button {
  cursor: pointer;
  width: 100%;
  padding: 0.3rem;
  font-weight: bold;
  border-radius: 1rem;
  text-transform: capitalize;
  border: 2px solid var(--brand-color);
}
.unfollow-btn {
  color: var(--white-color);
  background: var(--brand-color);
}
.follow-btn {
  background: var(--white-color);
  color: var(--brand-color);
  transition: all linear 300ms;
}
button:hover {
  box-shadow: 0 0 14px var(--brand-color-bg);
}
</style>
