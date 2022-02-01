<template>
  <div id="followers-component" class="wrapper">
    <div>
      <div>
        <!-- color: var(--brand-color); -->
        <h3 style="padding: 1rem; text-align: center; white-space: normal">
          <span v-if="$route.query.v === 'following'" style="font: inherit">
            Following
          </span>
          <span v-else-if="$route.query.v === 'follower'" style="font: inherit">
            Followers
          </span>
        </h3>
        <div v-if="!loading">
          <div
            v-for="account in accounts"
            :key="account.id + '-' + account.user.name"
            class="acct-col acct-div"
          >
            <div class="acct-img-div">
              <nuxt-link
                :to="{
                  name: 'username',
                  params: { username: account.user.name },
                  query: { v: 'shop' },
                }"
                ><img
                  loading="lazy"
                  class="acct-img"
                  :src="$asset('storage/profile_images/' + account.user.image)"
                  :alt="account.user.name"
              /></nuxt-link>
            </div>
            <div class="acct-info">
              <div style="display: grid; grid-template-columns: repeat(2, 1fr)">
                <p style="font-weight: bold; word-break: break-all">
                  {{ account.user.name }}
                </p>
                <div class="btn-col">
                  <FollowButtonComponent
                    v-if="account.user.id != user.id"
                    :account="account"
                  />
                </div>
              </div>
              <div style="position: relative">
                <span v-if="account.follows_you" class="check-following"
                  ><i class="fas fa-user"></i> Follows you</span
                >
              </div>
            </div>
          </div>
          <infinite-loading @infinite="infiniteHandler"></infinite-loading>
        </div>
        <div v-else>
          <v-skeleton-loader
            class="skeleton-loader"
            min-width="120"
            type="avatar, heading, button"
          ></v-skeleton-loader>
          <v-skeleton-loader
            class="skeleton-loader"
            min-width="120"
            type="avatar, heading, button"
          ></v-skeleton-loader>
          <v-skeleton-loader
            class="skeleton-loader"
            min-width="120"
            type="avatar, heading, button"
          ></v-skeleton-loader>
          <v-skeleton-loader
            class="skeleton-loader"
            min-width="120"
            type="avatar, heading, button"
          ></v-skeleton-loader>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
// import User from '@/assets/js/api/User'
import Action from '@/assets/js/api/Action'
import FollowButtonComponent from '@/components/button/FollowButtonComponent'
export default {
  name: 'FollowersComponent',
  components: {
    FollowButtonComponent,
    InfiniteLoading,
  },
  props: ['visited'],
  data() {
    return {
      accounts: [],
      loading: true,
      page: 1,
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
  },
  watch: {
    $route() {
      return this.getVistedUser()
    },
  },
  mounted() {
    this.getVistedUser()

    this.$root.$on('visitedDataGotten', () => {
      return this.getVistedUser()
    })
  },
  methods: {
    getVistedUser() {
      this.accounts = []
      this.page = 1
      this.loading = true
      if (!['', undefined, null].includes(this.visited.id)) {
        if (this.$route.query.v === 'following') {
          this.api = `/account/${this.visited.id}/following`
          return this.infiniteHandler()
        }
        if (this.$route.query.v === 'follower') {
          this.api = `/account/${this.visited.id}/follower`
          return this.infiniteHandler()
        }
      }
    },
    async infiniteHandler($state) {
      await Action.infiniteLoading(this.api, this.page)
        .then((res) => {
          this.requestSent = true
          if (res.data.data.length) {
            this.page += 1
            this.loading = false
            this.accounts.push(...res.data.data)
            $state.loaded()
          } else {
            $state.complete()
          }
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.data.status })
        })
    },
  },
}
</script>

<style scoped>
.acct-col:nth-child(even) {
  background: var(--bg-color);
}

.acct-col {
  text-decoration: none;
  color: var(--dark-color);
  border-radius: 1rem;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
}

.acct-col .acct-img-div {
  display: grid;
  justify-items: left;
}

.acct-col .acct-img {
  margin-right: 0.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.acct-info {
  width: 100%;
}

.btn-col {
  width: 100%;
  text-align: right;
}
.acct-bio {
  width: 100%;
  display: inline-block;
  height: 10px;
}
.check-following {
  color: var(--brand-color);
  font-size: 0.8rem;
  position: absolute;
  bottom: 0px;
  left: 10px;
}
</style>
