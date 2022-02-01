<template>
  <div class="tweet-div" :style="origin ? 'border:none;padding:0' : ''">
    <div
      class="tweet-content-div"
      :class="origin ? 'for-thread' : ''"
      :style="origin ? 'transform: scale(.85)' : ''"
      @click="viewStatus(d_broadcast.id, d_broadcast.type, $event)"
    >
      <div v-if="origin" class="thread-border">
        <span class="border-content"></span>
      </div>

      <input
        v-if="d_broadcast.user_id != user.id"
        hidden
        class=""
        style="display: none"
        value=""
      />
      <div class="tweet-img-div">
        <nuxt-link
          :to="{
            name: 'username',
            params: { username: d_broadcast.user.name },
            query: { v: 'broadcast' },
          }"
          ><img
            loading="lazy"
            :src="$asset('storage/profile_images/' + d_broadcast.user.image)"
            :alt="d_broadcast.user.name"
            class="tweeter-img"
        /></nuxt-link>
      </div>
      <div class="tweet-txt-div">
        <div
          v-if="d_broadcast.rebroadcasts != 0 && !d_broadcast.thread"
          class="retweeted-by"
          style="font-size: 0.75rem"
        >
          <div v-if="d_broadcast.retweeter_id === user.id">
            <i class="fas fa-bullhorn"></i> You retweeted
          </div>
          <div v-else-if="d_broadcast.info_display === 'retweets'">
            <div v-if="d_broadcast.retweets_count === 1">
              <i class="fas fa-bullhorn"></i>
              {{ d_broadcast.retweeter.name }}
            </div>
            <div v-else-if="d_broadcast.retweets_count === 2">
              <i class="fas fa-bullhorn"></i>
              {{ d_broadcast.retweeter.name }} and 1 other
            </div>
            <div v-else-if="d_broadcast.retweets_count > 2">
              <i class="fas fa-bullhorn"></i>
              {{ d_broadcast.retweeter.name }} and
              {{ d_broadcast.retweets_count }} others
            </div>
          </div>
          <div
            v-else-if="d_broadcast.info_display === 'likes'"
            class="tweet-liked"
            style="font-size: 0.75rem"
          >
            <div v-if="d_broadcast.likes_count === 1">
              <i class="fas fa-heart"></i>
              {{ d_broadcast.retweeter.name }}
            </div>
            <div v-else-if="d_broadcast.likes_count === 2">
              <i class="fas fa-heart"></i>
              {{ d_broadcast.retweeter.name }} and 1 other
            </div>
            <div v-else-if="d_broadcast.likes_count > 2">
              <i class="fas fa-heart"></i>
              {{ d_broadcast.retweeter.name }} and
              {{ d_broadcast.likes_count }} others
            </div>
          </div>
        </div>
        <div class="tweet-profile-div">
          <button
            class="tweet-options"
            @click="showModal(broadcast, null, 'option')"
          >
            <i class="fas fa-angle-down"></i>
          </button>
          <span class="tweet-username">{{ d_broadcast.user.name }}</span
          ><span class="tweet-time">. {{ d_broadcast.timeago }} </span>
        </div>
        <div
          class="tweet-body"
          style="text-decoration: none; color: #000"
          v-html="d_broadcast.body"
        ></div>
        <div v-if="d_broadcast.media != null" class="broadcast-media">
          <img
            v-for="img in d_broadcast.media"
            :key="img.id"
            loading="lazy"
            :src="$asset('storage/broadcast_images/' + img)"
            alt=""
            load="lazy"
            @click="viewImage($asset('storage/broadcast_images/' + img))"
          />
        </div>
        <BroadcastButtonComponent :broadcast="d_broadcast" />
        <span
          v-if="d_broadcast.is_thread"
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
</template>

<script>
import $ from 'jquery'
import BroadcastButtonComponent from '../button/BroadcastButtonComponent.vue'
// import broadcast from '~/store/broadcast'
export default {
  name: 'BroadcastComponent',
  components: { BroadcastButtonComponent },
  props: ['broadcast', 'origin'],
  data() {
    return {
      createdThreadStatus: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
    d_broadcast() {
      return this.broadcast
    },
  },
  mounted() {
    this.$root.$on('addedFromBookmark', (id) => {
      if (id === this.d_broadcast.id) {
        this.d_broadcast.bookmarked = true
      }
    })
    this.$root.$on('removedFromBookmark', (id) => {
      if (id === this.d_broadcast.id) {
        this.d_broadcast.bookmarked = false
      }
    })

    this.$root.$on('createdThread', () => {
      this.createdThreadStatus = true
    })

    this.$root.$on('updateComment', (tweet) => {
      if (this.origin) {
        if (this.d_broadcast.type === 'comment') {
          if (this.d_broadcast.id === tweet.post_id) {
            return (this.d_broadcast.comments += 1)
          }
        }
      }
      if (this.d_broadcast.id === tweet.post_id) {
        this.d_broadcast.comments += 1
        if (this.createdThreadStatus) {
          this.d_broadcast.is_thread = true
        }
      }
      if (this.d_broadcast.type === 'comment') {
        if (this.d_broadcast.id === this.tweet.post_id) {
          this.d_broadcast.comments += 1
        }
      }
    })
  },
  methods: {
    viewImage(src) {
      this.$root.$emit('viewImage', src)
    },
    showModal(data, type, modal) {
      this.$root.$emit('showModal', { tweet: data, type, modal })
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
          this.$router.push({
            name: 'broadcast-status-id',
            params: { id },
            query: { t: type },
          })
        }
        this.status = id
      }
    },
  },
}
</script>

<style>
.for-thread {
  position: relative;
}
.thread-border {
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  width: 2px;
  left: 26px;
}

.thread-border .border-content {
  width: inherit;
  height: 95%;
  background: #eee;
  z-index: -1;
}

.display-tweets {
  background: var(--white-color);
}

.hr-line {
  content: '';
  margin-left: 0.5rem;
  width: 100%;
  height: 2px;
  background: var(--brand-color);
}

.tweet-div {
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}

.tweet-content-div {
  display: flex;
  align-items: flex-start;
  z-index: 1;
}
.tweet-profile-div {
  position: relative;
}

.tweet-options {
  position: absolute;
  right: 0.5rem;
  top: 0;
  color: #ccc;
  background: none;
  border: none;
  padding: 0.5rem;
}

.tweet-time {
  color: #ccc;
  font-size: 0.8rem;
}

.tweet-img-div {
  z-index: 1;
  padding: 0.25rem 0;
  background: var(--white-color);
}
.tweeter-img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--bg-color);
}

.tweet-username {
  font-weight: bold;
}

.tweet-profile-div span {
  margin-left: 0.25rem;
  word-break: break-all;
}

.tweet-txt-div {
  margin-left: 0.5rem;
  width: 100%;
}

.tweet-txt {
  margin-top: 0.5rem;
}

.tweet-func-div {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0.25rem 0;
}

.tweet-func-div button {
  font-size: inherit;
  background: none;
  color: #ccc;
  padding: 0.25rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
}

/* .tweet-div:last-child {
  border: none;
} */
.tweet-body a {
  color: var(--brand-color);
}
.tweet-liked i {
  color: var(--red-color);
}

.retweeted-by,
.tweet-retweet i {
  color: var(--brand-color);
  text-decoration: none;
  word-break: break-all;
}
.retweeted-by {
  font-size: 0.75rem;
}

.broadcast-func-div input[type='file'] {
  display: none;
}
.broadcast-func-div button {
  font-size: inherit;
  font-size: 1.2rem;
  background: none;
  color: var(--brand-color);
  border: 1px solid var(--brand-color);
  border: none;
  padding: 0.25rem;
}
</style>
