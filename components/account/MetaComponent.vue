<template>
  <div id="meta-component">
    <!-- <h3 class="sb-text"><i class="fas fa-info-circle"></i> Account Info</h3> -->
    <div class="seller-profile">
      <div class="seller-img-col">
        <img
          v-if="visited.image"
          loading="lazy"
          :src="$asset('storage/profile_images/' + visited.image)"
          :alt="visited.name"
          class="shop-seller-image"
          @click="viewImage($asset('storage/profile_images/' + visited.image))"
        />
        <v-skeleton-loader
          v-else
          class="mx-auto"
          type="avatar"
        ></v-skeleton-loader>
      </div>
      <div class="seller-info-col">
        <div class="meta-row">
          <h2 style="word-break: break-word; white-space: normal">
            {{ $route.params.username }}
          </h2>
        </div>
        <div class="meta-row">
          <span v-if="visited.geo_location"
            ><i class="fas fa-map-marker-alt"></i>
            {{ visited.geo_location }}</span
          >
          <v-skeleton-loader
            v-else
            class="mx-auto"
            type="heading"
          ></v-skeleton-loader>
        </div>
        <div class="meta-row">
          <!-- style="text-align: left; justify-content: initial" -->
          <span v-if="visited.bio">{{ visited.bio }}</span>
          <v-skeleton-loader
            v-else
            class="mx-auto"
            type="heading"
          ></v-skeleton-loader>
        </div>
        <div class="_s-f">
          <nuxt-link
            :to="{
              name: 'username',
              params: { username: visited.name },
              query: { v: 'following' },
            }"
            >{{ visited.following }}
            <span class="_s-f-c">Following</span></nuxt-link
          >

          <nuxt-link
            :to="{
              name: 'username',
              params: { username: visited.name },
              query: { v: 'follower' },
            }"
            ><span id="v-followers">{{ visited.followers }} </span
            ><span class="_s-f-c">Followers</span></nuxt-link
          >
        </div>
        <p
          style="text-align: center"
          :class="'btndiv_' + visited.id + ' visited_influence'"
        >
          <FollowButtonComponent
            v-if="visited && user.id !== visited.id"
            :account="visited"
            class="meta-button"
          />
          <v-skeleton-loader
            v-else
            class="mx-auto"
            type="button"
            :style="user.id === visited.id ? 'display:none' : ''"
          ></v-skeleton-loader>
        </p>
      </div>
    </div>
    <div id="visitAction" class="visit-action-div">
      <nuxt-link
        :to="{
          name: 'username',
          params: { username: $route.params.username },
          query: { v: 'shop' },
        }"
        :class="
          $route.query.v == 'shop'
            ? 'seller-product-header shop-action'
            : 'visit-default-btn'
        "
        style="text-decoration: none"
      >
        <i class="fas fa-shopping-bag"></i> Products
      </nuxt-link>
      <nuxt-link
        :to="{
          name: 'username',
          params: { username: $route.params.username },
          query: { v: 'broadcast' },
        }"
        :class="
          $route.query.v == 'broadcast'
            ? 'seller-product-header broadcast-action'
            : 'visit-default-btn'
        "
        style="text-decoration: none"
      >
        <i class="fas fa-bullhorn"></i> Broadcasts
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import FollowButtonComponent from '@/components/button/FollowButtonComponent'
export default {
  name: 'MetaComponent',
  components: {
    FollowButtonComponent,
  },
  props: ['visited'],
  // props: { visited: { type: Object, required: true } },
  data() {
    return {
      form: { visitedid: '', action: '' },
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
  },
  methods: {
    viewImage(src) {
      this.$root.$emit('viewImage', src)
    },
  },
}
</script>

<style scoped>
.seller-profile {
  margin-top: 0.5rem;
  padding: 0.3rem;
  display: grid;
  background: var(--bg-color);
  grid-gap: 0.2em;
  border-radius: 1rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
}
.seller-img-col {
  position: absolute;
  top: -3%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 120px;
  height: 120px;
  background: #fff;
  border-radius: 50%;
  padding: 0.35rem;
  justify-self: center;
  align-self: center;
}
.seller-info-col {
  margin-top: 5.5rem;
  padding: 0.3rem;
}
.seller-info-col p {
  margin-bottom: 0.6em;
}
.seller-info-col ._s-f {
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: var(--dark-color);
  border-top: 1px solid rgba(128, 128, 128, 0.7);
  text-align: center;
  padding: 0.5rem;
}
._s-f a {
  text-decoration: none;
  color: #444;
}
._s-f-c {
  margin-right: 0.5rem;
  color: var(--dark-color);
  font-weight: normal;
}
.shop-seller-image {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
}
.meta-row {
  display: flex;
  margin: 0.5rem 0;
  text-align: center;
  justify-content: center;
}
.seller-info-label {
  color: var(--dark-bg);
  margin-right: 0.5rem;
}
.seller-rating-col {
  text-align: center;
  grid-column: 1/5;
}
.visited_influence .meta-button {
  width: 75%;
  max-width: 320px;
  margin: 0 auto;
}
.seller-product-header {
  background: var(--white-color);
  font-weight: bold;
  text-align: center;
  padding: 0.5em;
  color: var(--brand-color);
  border: 1px solid var(--brand-color);
  border-radius: 1rem;
}
.visit-action-div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: var(--white-color);
  padding: 0.5rem;
}
.visit-default-btn {
  padding: 0.5rem;
  font-weight: bold;
  text-align: center;
  color: var(--dark-color);
  background: var(--white-color);
}
.visit-action-div a {
  text-decoration: none;
}
.visit-action-div a:hover {
  color: var(--brand-color);
}

@media screen and (min-width: 768px) {
  .seller-profile {
    grid-template-columns: 40% 60%;
  }
  .seller-img-col {
    position: relative;
  }
  .seller-info-col {
    margin-top: 0;
  }
}
</style>
