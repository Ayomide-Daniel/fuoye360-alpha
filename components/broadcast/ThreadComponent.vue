<template>
  <div id="broadcast-component">
    <div class="div-title">
      <div class="title-container">
        <h3>
          <span v-if="$route.query.t === 'thread'" style="font: inherit"
            ><i class="fas fa-newspaper"></i> Thread</span
          >
          <span v-else-if="$route.query.t === 'comment'" style="font: inherit"
            ><i class="fas fa-comment"></i> Comment</span
          >
          <span v-else-if="$route.query.t === 'broadcast'" style="font: inherit"
            ><i class="fas fa-bullhorn"></i> Broadcast</span
          >
        </h3>
      </div>
    </div>
    <br /><br />

    <div class="wrapper">
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
      </div>
      <div v-if="broadcasts.length > 0">
        <div class="display-tweets">
          <div
            v-for="broadcast in broadcasts"
            :key="broadcast.id"
            class="view-thread tweet-div"
            :data-status="broadcast.id"
            style="border: none"
            :style="
              $route.params.id != broadcast.id ? 'transform: scale(.8)' : ''
            "
          >
            <div
              class="tweet-content-div for-thread"
              @click="viewStatus(broadcast.id, broadcast.type, $event)"
            >
              <div v-if="to_hide_border != broadcast.id" class="thread-border">
                <span class="border-content"></span>
              </div>
              <div class="tweet-img-div">
                <router-link
                  :to="{
                    name: 'username',
                    params: { username: broadcast.user.name },
                    query: { v: 'broadcast' },
                  }"
                  ><img
                    loading="lazy"
                    :src="
                      $asset('storage/profile_images/' + broadcast.user.image)
                    "
                    :alt="broadcast.user.name"
                    class="tweeter-img"
                /></router-link>
              </div>
              <div class="tweet-txt-div">
                <div class="tweet-profile-div">
                  <button
                    class="tweet-options"
                    @click="showOptionBox(broadcast, 'origin')"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                  <span class="tweet-username">{{ broadcast.user.name }}</span
                  ><span class="tweet-time">. {{ broadcast.timeago }} </span>
                </div>
                <div
                  class="tweet-body"
                  style="text-decoration: none; color: #000"
                  v-html="broadcast.body"
                ></div>
                <div v-if="broadcast.media != null" class="broadcast-media">
                  <img
                    v-for="img in broadcast.media"
                    :key="img.id"
                    loading="lazy"
                    :src="$asset('storage/broadcast_images/' + img)"
                    alt=""
                    load="lazy"
                    @click="
                      viewImage($asset('storage/broadcast_images/' + img))
                    "
                  />
                </div>
                <BroadcastButtonComponent :broadcast="broadcast" />
                <span
                  v-if="broadcast.is_thread"
                  style="
                    background: var(--brand-color);
                    padding: 0.25rem 0.5rem;
                    color: var(--white-color);
                    border-radius: 1rem;
                    font-size: 0.75rem;
                  "
                  ><i class="fas fa-newspaper"></i> Thread</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else-if="!loading && broadcasts.length <= 0"
        class="shop-empty-col"
      >
        <img
          loading="lazy"
          :src="require('~/assets/illustrations/broadcast-animate.svg')"
          alt="Empty-Trending"
        />
        <div>
          <p>Unable to find broadcast</p>
          <nuxt-link :to="{ name: 'broadcast' }"
            ><i class="fas fa-search"></i> Find exciting broadcasts
            elsewhere</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import BroadcastButtonComponent from '../button/BroadcastButtonComponent.vue'
import Broadcast from '~/assets/js/api/Broadcast'

export default {
  name: 'ThreadComponent',
  components: {
    BroadcastButtonComponent,
  },
  data() {
    return {
      loading: true,
      comments_exist: '',
      comments: [],
      to_hide_border: '',
      newBroadcasts: [],
      filterBroadcasts: [],
      tweet_is_original: '',
      api: '',
      page: 1,
      broadcasts: [],
      status: '',
    }
  },
  watch: {
    $route() {
      this.setupThread()
    },
  },
  mounted() {
    this.setupThread()
  },
  methods: {
    setupThread() {
      this.broadcasts = []
      this.comments = []
      this.page = 1
      this.status = this.$route.params.id
      Broadcast.viewThread(this.$route.params.id)
        .then((res) => {
          this.loading = false
          this.broadcasts = res.data.data
          this.broadcasts.forEach((broadcast, index) => {
            this.comments_exist = broadcast.comments > 0
            this.form.id = broadcast.id
            if (index === this.broadcasts.length - 1) {
              this.to_hide_border = broadcast.id
            }
          })
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.response.status })
        })
    },
    viewStatus(id, type, e) {
      if (
        $(e.target).closest('.tweeter-img').length === 0 &&
        $(e.target).closest('.tweet-func-div').length === 0 &&
        $(e.target).closest('.tweet-profile-div').length === 0 &&
        $(e.target).closest('.retweeted-by').length === 0 &&
        $(e.target).closest('.broadcast-media img').length === 0 &&
        $(e.target).closest('.tweet-content-div a').length === 0
      ) {
        if (this.status !== id) {
          this.status = id
          this.$router.push({
            name: 'broadcast-status-id',
            params: { id },
            query: { t: type },
          })
        }
      }
    },

    updateComment(data) {
      if (this.tweet_is_original === true) {
        this.broadcasts.forEach((element) => {
          if (element.id === this.tweet.id) {
            element.comments += 1
          }
        })
        this.tweet_is_original = false
      } else {
        this.comments.forEach((element) => {
          if (this.type === 'origin') {
            if (element.type === 'comment') {
              if (element.original_post.id === this.tweet.id) {
                return (element.original_post.comments += 1)
              }
            }
          }
          if (element.id === this.tweet.id) {
            return (element.comments += 1)
          } else if (element.type === 'comment') {
            if (element.original_post.id === this.tweet.id) {
              element.comments += 1
            }
          }
        })
      }
      if (data.comment_id === this.form.id) {
        this.comments.unshift(data)
      }
    },
    showOptionBox(data, type) {
      if (type === 'origin') {
        this.tweet = data
        this.type = type
        this.tweet_is_original = true
        return this.$root.$emit('showModal', {
          tweet: data,
          type: 'origin',
          modal: 'option',
        })
      }
      this.tweet = data.tweet
      this.type = data.type
      return this.$root.$emit('showModal', {
        tweet: data,
        type: 'origin',
        modal: 'option',
      })
    },
    newBroadcast() {
      this.$emit('newBroadcast')
    },
    closeBroadcast() {
      this.$emit('closeBroadcast')
    },
    viewImage(src) {
      this.$root.$emit('viewImage', src)
    },
    appendBroadcast(broadcast) {
      if (broadcast.media != null) {
        broadcast.media = JSON.parse(broadcast.media)
      }
      this.broadcasts.unshift(broadcast)
    },
    updateBroadcasts(id) {
      if (this.$route.params.page === undefined) {
        this.broadcasts = this.broadcasts.filter(
          (broadcast) => broadcast.retweeter.id !== id
        )
        this.broadcasts.forEach((broadcast, index) => {
          if (broadcast.type === 'comment') {
            if (broadcast.original_post.user_id === id) {
              broadcast.original_post.is_following = false
            }
          }
          if (broadcast.user_id === id) {
            broadcast.is_following = false
          }
          console.log(broadcast.retweeter.id)
          if (
            broadcast.retweeter.id === undefined &&
            broadcast.user_id === id
          ) {
            this.broadcasts.splice(index, 1)
          }
        })
      }
      // this.showOption = false;
      this.closeOption()
    },
    updateUser(user) {
      if (this.$route.params.username === this.user.name) {
        console.log(user)
        this.visited.following = user.user.following
      }
      this.$emit('updateUser', user)
    },
  },
}
</script>
