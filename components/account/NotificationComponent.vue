<template>
  <div transition="scale-transition">
    <div v-if="loading" class="loading-animation">
      <v-progress-circular
        indeterminate
        color="white"
        width="3"
        size="20"
      ></v-progress-circular>
    </div>
    <button
      :class="'delete-notification btnid_' + notification.sender.id"
      @click="deleteNotification(notification.id)"
    >
      &times;
    </button>
    <div v-if="notification.type == 'follow'">
      <nuxt-link
        :to="{
          name: 'username',
          params: { username: notification.sender.name },
          query: { v: 'shop' },
        }"
        ><div class="img-div">
          <img
            loading="lazy"
            :src="$asset('storage/profile_images/' + notification.sender.image)"
            :alt="notification.sender.name"
          />
          <span class="icon-div">
            <i class="fas fa-user" style="color: limegreen"></i>
          </span>
        </div>
        <br />
        <span class="t_success notifier">{{
          notification.sender.name
        }}</span></nuxt-link
      >
      followed you <br /><span class="time">
        {{ notification.relative_at }}</span
      >
    </div>

    <div v-else-if="notification.type == 'new-product'">
      <nuxt-link
        :to="{
          name: 'username',
          params: { username: notification.sender.name },
          query: { v: 'shop' },
        }"
      >
        <div class="img-div">
          <img
            loading="lazy"
            :src="$asset('storage/profile_images/' + notification.sender.image)"
            :alt="notification.sender.name"
          />
          <span class="icon-div">
            <i class="fas fa-shopping-bag" style="color: limegreen"></i>
          </span>
        </div>
        <br />
        <span class="t_success notifier">{{
          notification.sender.name
        }}</span></nuxt-link
      >
      added a new product, <span style="font-weight: bold"></span> <br /><span
        class="time"
      >
        {{ notification.relative_at }}</span
      >
    </div>

    <div v-else-if="notification.type == 'sales'">
      <nuxt-link
        :to="{
          name: 'username',
          params: { username: notification.sender.name },
        }"
      >
        <div class="img-div">
          <img
            loading="lazy"
            :src="$asset('storage/profile_images/' + notification.sender.image)"
            :alt="notification.sender.name"
          />
          <span class="icon-div"
            ><i class="fas fa-cart-plus" style="color: limegreen"></i>
          </span>
        </div>
        <br />
        <span class="t_success notifier">{{
          notification.sender.name
        }}</span></nuxt-link
      >
      wants to buy
      <span class="n-product">
        <ul style="padding: 1rem 2rem 0">
          <li v-for="(product, index) in notification.data" :key="index">
            {{ product.qty + ' ' + product.name
            }}{{ product.qty > 1 ? '(s)' : '' }}
          </li>
        </ul>
      </span>
      <br /><span class="time"> {{ notification.relative_at }}</span>
    </div>

    <div v-else-if="notification.type == 'new-broadcast'">
      <nuxt-link
        :to="{
          name: 'username',
          params: { username: notification.sender.name },
          query: { v: 'broadcast' },
        }"
      >
        <div class="img-div">
          <img
            loading="lazy"
            :src="$asset('storage/profile_images/' + notification.sender.image)"
            :alt="notification.sender.name"
          />
          <span class="icon-div">
            <i class="fas fa-bullhorn" style="color: limegreen"></i>
          </span>
        </div>
        <br />
        <span class="t_success notifier">{{
          notification.sender.name
        }}</span></nuxt-link
      >
      sent a new broadcast
      <br /><span class="time"> {{ notification.relative_at }}</span>
    </div>

    <div v-else-if="notification.type == 'rebroadcast'">
      <nuxt-link
        :to="{
          name: 'username',
          params: { username: notification.sender.name },
          query: { v: 'broadcast' },
        }"
      >
        <div class="img-div">
          <img
            loading="lazy"
            :src="$asset('storage/profile_images/' + notification.sender.image)"
            :alt="notification.sender.name"
          />
          <span class="icon-div">
            <i class="fas fa-bullhorn" style="color: limegreen"></i>
          </span>
        </div>
        <br />
        <span class="t_success notifier">{{
          notification.sender.name
        }}</span></nuxt-link
      >
      rebroadcasted your broadcast <br /><span class="time">
        {{ notification.relative_at }}</span
      >
    </div>

    <div v-else-if="notification.type == 'like-broadcast'">
      <nuxt-link
        :to="{
          name: 'username',
          params: { username: notification.sender.name },
          query: { v: 'broadcast' },
        }"
      >
        <div class="img-div">
          <img
            loading="lazy"
            :src="$asset('storage/profile_images/' + notification.sender.image)"
            :alt="notification.sender.name"
          />
          <span class="icon-div">
            <i class="fas fa-heart" style="color: limegreen"></i>
          </span>
        </div>
        <br />
        <span class="t_success notifier">{{
          notification.sender.name
        }}</span></nuxt-link
      >
      liked your broadcast
      <br /><span class="time"> {{ notification.relative_at }}</span>
    </div>

    <div v-else-if="notification.type == 'comment-broadcast'">
      <nuxt-link
        :to="{
          name: 'username',
          params: { username: notification.sender.name },
          query: { v: 'broadcast' },
        }"
      >
        <div class="img-div">
          <img
            loading="lazy"
            :src="$asset('storage/profile_images/' + notification.sender.image)"
            :alt="notification.sender.name"
          />
          <span class="icon-div">
            <i class="fas fa-comment" style="color: limegreen"></i>
          </span>
        </div>
        <br />
        <span class="t_success notifier">{{
          notification.sender.name
        }}</span></nuxt-link
      >
      replied to your broadcast
      <br /><span class="time"> {{ notification.relative_at }}</span>
    </div>
    <div v-if="notification.new == true" class="new-notification">
      <i class="fas fa-bell"></i> NEW
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Action from '@/assets/js/api/Action'
export default {
  name: 'NotificationComponent',
  props: ['notification'],
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    deleteNotification() {
      this.loading = true
      Action.deleteNotification(this.notification.id)
        .then((res) => {
          this.$root.$emit('notificationDeleted', this.notification.id)
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.response.status })
        })
    },
  },
  redirect(e) {
    if (
      $(e.target).closest('a').length === 0 &&
      $(e.target).closest('button').length === 0
    ) {
      if (this.notification.type === 'follow') {
        return this.$router.push({
          name: 'username',
          params: { username: this.notification.sender.name },
          query: { v: 'shop' },
        })
      }
    }
  },
}
</script>

<style scoped>
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.delete-notification {
  position: absolute;
  right: 5px;
  font-size: 1.2rem;
  color: var(--red-color);
  cursor: pointer;
  background: none;
  border-radius: 50%;
  border: 1px solid var(--red-color);
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.time {
  display: block;
  float: right;
  font-size: 0.7rem;
  color: var(--input-border-color);
}
.loading-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border-radius: 0.5rem;
  background: var(--dark-bg);
  top: 0;
  left: 0;
}
.n-product {
  font-weight: bold;
}
.notifier {
  font-weight: bold;
  color: var(--brand-color);
}
a {
  text-decoration: none;
}
.new-notification {
  display: block;
  float: right;
  background: var(--brand-color);
  color: #fff;
  padding: 0 0.5rem;
  border-radius: 1rem;
  font-size: 0.55rem;
  margin-right: 1rem;
}
.img-div {
  display: inline-block;
  position: relative;
}
.icon-div {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.6rem;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white-color);
  border-radius: 50%;
}
</style>
