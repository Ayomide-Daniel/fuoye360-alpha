<template>
  <div id="notifications-component">
    <div class="div-title">
      <div class="title-container">
        <h3 class=""><i class="fas fa-bell"></i> Notifications</h3>
      </div>
    </div>
    <br /><br />

    <div class="wrapper">
      <div v-if="loading">
        <v-skeleton-loader
          class="skeleton-loader"
          min-width="120"
          type="avatar, heading"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="skeleton-loader"
          min-width="120"
          type="avatar, heading"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="skeleton-loader"
          min-width="120"
          type="avatar, heading"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="skeleton-loader"
          min-width="120"
          type="avatar, heading"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="skeleton-loader"
          min-width="120"
          type="avatar, heading"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="skeleton-loader"
          min-width="120"
          type="avatar, heading"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="skeleton-loader"
          min-width="120"
          type="avatar, heading"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="skeleton-loader"
          min-width="120"
          type="avatar, heading"
        ></v-skeleton-loader>
      </div>
      <div v-if="notifications.length > 0" id="notification-wrapper">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          class="notification-col"
        >
          <NotificationComponent :notification="notification" />
        </div>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </div>
      <div v-else-if="!loading && notifications.length <= 0">
        <div class="shop-empty-col">
          <img
            loading="lazy"
            :src="require('assets/illustrations/new-message-animate.svg')"
            alt="Empty-Notification"
          />
          <div>
            <p>No new Notifications</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Action from '@/assets/js/api/Action'
import InfiniteLoading from 'vue-infinite-loading'
import NotificationComponent from '@/components/account/NotificationComponent'
export default {
  components: {
    InfiniteLoading,
    NotificationComponent,
  },
  middleware: ['auth'],
  data() {
    return {
      notifications: [],
      api: '',
      page: 1,
      loading: true,
    }
  },
  head() {
    return {
      title: 'FUOYE360 NOTIFICATIONS',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'FUOYE360 NOTIFICATION',
        },
      ],
    }
  },
  computed: {
    push_notifications_id() {
      return this.$store.state.notification.push_notifications_id
    },
  },

  mounted() {
    this.$root.$on('notificationDeleted', (id) => {
      this.notifications = this.notifications.filter(
        (notification) => notification.id !== id
      )
    })
    this.api = '/notifications'
    this.infiniteHandler()
  },
  methods: {
    infiniteHandler($state) {
      Action.infiniteLoading(this.api, this.page)
        .then((res) => {
          if (res.data.data.length) {
            this.page += 1
            res.data.data.forEach((element) => {
              if (this.push_notifications_id.includes(element.id)) {
                element.new = true
              }
            })
            this.notifications.push(...res.data.data)
            this.loading = false
            $state.loaded()
          } else {
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
#notification-wrapper {
  display: grid;
  border-radius: 5px;
  margin-top: 0.5rem;
  grid-gap: 0.25rem;
}

.notification-col {
  padding: 0.4em;
  position: relative;
  border-radius: 1rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
  line-height: 2;
}

.notification-col:nth-child(odd) {
  background: var(--white-color);
}

.notification-col:nth-child(even) {
  background: var(--bg-color);
}

.notification-col:nth-child(even) .time {
  color: var(--dark-color);
}
</style>
