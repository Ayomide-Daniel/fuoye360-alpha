<template>
  <div class="tweet-func-div">
    <button @click="showModal('comment')">
      <i class="far fa-comment"></i>
      <span class="comment-count">{{ btn_broadcast.comments }}</span>
    </button>
    <button
      v-if="btn_broadcast.is_rebroadcast"
      class="tweet-retweet"
      @click="undoRebroadcast()"
    >
      <i class="fa fa-bullhorn"></i>
      {{ btn_broadcast.rebroadcasts }}
    </button>
    <button v-else @click="rebroadcast()">
      <i class="fa fa-bullhorn"></i>
      {{ btn_broadcast.rebroadcasts }}
    </button>
    <button
      v-if="btn_broadcast.is_liked"
      class="tweet-liked"
      @click="unlikeBroadcast()"
    >
      <i class="fas fa-heart"></i> {{ btn_broadcast.likes }}
    </button>
    <button v-else @click="likeBroadcast()">
      <i class="far fa-heart"></i> {{ btn_broadcast.likes }}
    </button>
    <button @click="showModal('share')">
      <i class="fas fa-share-alt"></i>
    </button>
  </div>
</template>

<script>
import Broadcast from '~/assets/js/api/Broadcast'
export default {
  name: 'BroadcastButtonComponent',
  props: ['broadcast', 'type'],
  computed: {
    btn_broadcast() {
      return this.broadcast
    },
  },
  methods: {
    unlikeBroadcast() {
      Broadcast.unlikeBroadcast(this.btn_broadcast.id).then((res) => {
        this.btn_broadcast.is_liked = false
        this.btn_broadcast.likes = res.data.data.likes
        return true
      })
    },
    likeBroadcast() {
      Broadcast.likeBroadcast(this.btn_broadcast.id).then((res) => {
        this.btn_broadcast.is_liked = true
        this.btn_broadcast.likes = res.data.data.likes
        return true
      })
    },
    rebroadcast() {
      Broadcast.rebroadcast(this.btn_broadcast.id).then((res) => {
        this.btn_broadcast.is_rebroadcast = true
        this.btn_broadcast.rebroadcasts = res.data.data.rebroadcasts
      })
    },
    undoRebroadcast() {
      Broadcast.undoRebroadcast(this.btn_broadcast.id).then((res) => {
        this.btn_broadcast.is_rebroadcast = false
        this.btn_broadcast.rebroadcasts = res.data.data.rebroadcasts
      })
    },
    showModal(modal) {
      if (this.type === true) {
        return this.$root.$emit('showModal', {
          tweet: this.btn_broadcast,
          type: 'origin',
          modal,
        })
      }
      return this.$root.$emit('showModal', {
        tweet: this.btn_broadcast,
        type: '',
        modal,
      })
    },
  },
}
</script>

<style scoped></style>
