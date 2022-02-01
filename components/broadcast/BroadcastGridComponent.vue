<template>
  <div id="broadcast-component" class="wrapper">
    <a
      v-if="$route.name === 'broadcast'"
      href="#"
      class="new-tweets-available"
      @click="pushBroadcast"
      ><i class="fas fa-bell"></i> NEW BROADCASTS</a
    >

    <div style="padding: 0.5rem">
      <h3 v-if="$route.name === 'broadcast-status-id'">COMMENTS</h3>
    </div>
    <div v-if="loading">
      <div class="skeleton-loader">
        <v-skeleton-loader type="avatar"></v-skeleton-loader>
        <v-skeleton-loader
          min-width="120"
          type="heading, heading, heading"
          class="heading-loading"
        ></v-skeleton-loader>
      </div>
      <div class="skeleton-loader">
        <v-skeleton-loader type="avatar"></v-skeleton-loader>
        <v-skeleton-loader
          min-width="120"
          type="heading, heading, heading"
          class="heading-loading"
        ></v-skeleton-loader>
      </div>
      <div class="skeleton-loader">
        <v-skeleton-loader type="avatar"></v-skeleton-loader>
        <v-skeleton-loader
          min-width="120"
          type="heading, heading, heading"
          class="heading-loading"
        ></v-skeleton-loader>
      </div>
      <div class="skeleton-loader">
        <v-skeleton-loader type="avatar"></v-skeleton-loader>
        <v-skeleton-loader
          min-width="120"
          type="heading, heading, heading"
          class="heading-loading"
        ></v-skeleton-loader>
      </div>
      <div class="skeleton-loader">
        <v-skeleton-loader type="avatar"></v-skeleton-loader>
        <v-skeleton-loader
          min-width="120"
          type="heading, heading, heading"
          class="heading-loading"
        ></v-skeleton-loader>
      </div>
      <div class="skeleton-loader">
        <v-skeleton-loader type="avatar"></v-skeleton-loader>
        <v-skeleton-loader
          min-width="120"
          type="heading, heading, heading"
          class="heading-loading"
        ></v-skeleton-loader>
      </div>
      <div class="skeleton-loader">
        <v-skeleton-loader type="avatar"></v-skeleton-loader>
        <v-skeleton-loader
          min-width="120"
          type="heading, heading, heading"
          class="heading-loading"
        ></v-skeleton-loader>
      </div>
    </div>
    <div v-if="broadcasts.length > 0">
      <div v-for="broadcast in broadcasts" :key="broadcast.id">
        <div v-if="broadcast.is_comment && !broadcast.is_thread">
          <BroadcastComponent
            :broadcast="broadcast.original_post"
            :origin="true"
          />
        </div>
        <BroadcastComponent :broadcast="broadcast" :origin="false" />
      </div>
    </div>
    <div v-else-if="!loading && broadcasts.length <= 0">
      <div v-if="$route.name === 'username'">
        <div class="shop-empty-col">
          <img
            loading="lazy"
            :src="require('~/assets/illustrations/broadcast-animate.svg')"
            alt="Empty-Broadcasts"
          />
          <div>
            <p>Oops! {{ visited.name }} has no broadcasts yet.</p>
            Broadcasts sent by {{ visited.name }} will appear here
            <nuxt-link :to="{ name: 'broadcast-trending' }"
              ><i class="fas fa-search"></i> Find other exciting
              broadcasts</nuxt-link
            >
          </div>
        </div>
      </div>
      <div v-if="$route.name === 'broadcast-trending'">
        <div class="shop-empty-col">
          <img
            loading="lazy"
            :src="require('~/assets/illustrations/broadcast-animate.svg')"
            alt="Empty-Broadcasts"
          />
          <div>
            <p>Oops! No trending Broadcasts at the moment</p>
            <nuxt-link :to="{ name: 'search' }"
              ><i class="fas fa-search"></i> Find other exciting
              broadcasts</nuxt-link
            >
          </div>
        </div>
      </div>
      <div v-if="$route.name === 'broadcast-bookmarks'">
        <div class="shop-empty-col">
          <img
            loading="lazy"
            :src="require('~/assets/illustrations/broadcast-animate.svg')"
            alt="Empty-Broadcasts"
          />
          <div>
            <p>Oops! No bookmarked Broadcasts at the moment</p>
            <nuxt-link :to="{ name: 'broadcast-trending' }"
              ><i class="fas fa-search"></i> Find other exciting
              broadcasts</nuxt-link
            >
          </div>
        </div>
      </div>

      <div v-if="$route.name === 'broadcast-status-id'">
        <div class="shop-empty-col">
          <img
            loading="lazy"
            :src="require('~/assets/illustrations/file-searching-animate.svg')"
            alt="Empty-Broadcasts"
          />
          <div>
            <p>Oops! No comments on this Broadcast at the moment</p>
          </div>
        </div>
      </div>
    </div>
    <ModalComponent />
    <infinite-loading
      v-if="!loading"
      @infinite="infiniteHandler"
    ></infinite-loading>
  </div>
</template>

<script>
import $ from 'jquery'
import Action from '@/assets/js/api/Action'
import InfiniteLoading from 'vue-infinite-loading'
// import ThreadComponent from '@/components/broadcast/ThreadComponent'
import BroadcastComponent from '@/components/broadcast/BroadcastComponent'
import ModalComponent from '@/components/broadcast/ModalComponent'
// import Broadcast from '~/assets/js/api/Broadcast'

export default {
  name: 'BroadcastGridComponent',
  components: {
    InfiniteLoading,
    // ThreadComponent,
    BroadcastComponent,
    ModalComponent,
  },
  props: ['visited'],
  data() {
    return {
      broadcasts: [],
      tweet: {},
      showComment: false,
      showShare: false,
      showOption: false,
      type: '',
      createdThreadStatus: '',
      api: '',
      page: 1,
      push_broadcasts: [],
      broadcast_pushed: false,
      loading: true,
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
  },
  watch: {
    $route() {
      this.getBroadcasts()
    },
    push_broadcasts() {
      setTimeout(() => {
        this.pushBroadcast()
      }, 3000)
    },
  },
  mounted() {
    this.getBroadcasts()
    this.$root.$on('visitedDataGotten', () => {
      this.getBroadcasts()
    })
    this.$root.$on('appendBroadcast', (broadcast) => {
      if (this.$route.name === 'broadcast') {
        this.broadcasts.unshift(broadcast)
      }
    })
    if (this.$route.name === 'broadcast') {
      this.$echo.channel('fuoye360_channel').on('NewBroadcast', (e) => {
        e.PUSH_NOTIFICATION_RECEIVERS.forEach((id) => {
          if (id === this.user.id) {
            $('.new-tweets-available').fadeIn()
            e.PUSH_BROADCASTS.forEach((broadcast) => {
              if (this.push_broadcasts.length <= 0) {
                this.push_broadcasts.push(broadcast)
              } else {
                this.push_broadcasts.unshift(broadcast)
              }
            })
            $('.new-tweets-available').animate({
              top: 100,
            })
            this.broadcast_pushed = false
          }
        })
      })
    }
  },
  methods: {
    pushBroadcast() {
      if (this.broadcast_pushed !== true) {
        this.push_broadcasts.forEach((broadcast) => {
          this.broadcasts.unshift(broadcast)
        })
        $('.new-tweets-available').animate({
          top: -100,
        })
        this.broadcast_pushed = true
        this.push_broadcasts = []
      }
    },

    getBroadcasts() {
      this.page = 1
      this.broadcasts = []
      this.loading = true
      if (this.$route.name === 'broadcast') {
        this.api = '/broadcast'
        return this.infiniteHandler()
      }
      if (this.$route.name === 'broadcast-bookmarks') {
        this.api = '/broadcast/bookmarks'
        return this.infiniteHandler()
      }
      if (this.$route.name === 'broadcast-trending') {
        this.api = '/broadcast/trending'
        return this.infiniteHandler()
      }
      if (this.$route.name === 'broadcast-status-id') {
        this.api = '/broadcast/' + this.$route.params.id + '/comments'
        return this.infiniteHandler()
      }
      if (this.$route.name === 'username') {
        if (['', undefined, null].includes(this.visited.id)) {
          return
        }
        this.api = '/broadcast/' + this.visited.id
        return this.infiniteHandler()
      }
    },
    infiniteHandler($state) {
      Action.infiniteLoading(this.api, this.page)
        .then((res) => {
          if (res.data.data.length) {
            this.page += 1
            this.broadcasts.push(...res.data.data)
            this.loading = false
            $state.loaded()
          } else {
            this.loading = false
            $state.complete()
          }
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.response.status })
        })
    },
  },
}
</script>

<style scoped>
.new-tweets-available {
  position: fixed;
  z-index: 11;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: max-content;
  display: block;
  top: -100%;
  background: var(--brand-color);
  padding: 0.5rem;
  color: var(--white-color);
  border-radius: 1rem;
  box-shadow: 0 0 14px var(--brand-color-bg);
  text-decoration: none;
  font-size: 0.75rem;
  transition: all alternate-reverse 1500ms;
}
</style>
