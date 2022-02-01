<template>
  <div id="trending-block">
    <div class="h-trendn-b">
      <h3 class="sb-text"><i class="fas fa-fire"></i> Trending Shops</h3>
    </div>
    <div class="inset-div">
      <div class="lhs-blur blur-edg"></div>
      <div class="rhs-blur blur-edg"></div>
      <div class="trend-b">
        <!-- REAL DATA -->
        <div
          v-for="trending in trendings"
          :key="trending.id"
          class="trendn-col visit-acct"
          @click="visitUser($event, trending.name)"
        >
          <button
            class="trendn-help"
            :class="'btnid_' + trending.id"
            style="display: block"
            @click="viewShopInfo(trending.id, $event)"
          >
            <i class="fas fa-info-circle"></i>
          </button>
          <div class="sub-div">
            <div class="shop-img">
              <img
                loading="lazy"
                :src="$asset(`storage/profile_images/${trending.image}`)"
                :alt="trending.name"
              />
            </div>
            <div class="trendn-info">
              <table style="display: none">
                <td :class="'trendn_name_' + trending.id">
                  {{ trending.name }}
                </td>
                <td :class="'trendn_location_' + trending.id">
                  {{ trending.geo_location }}
                </td>
                <td :class="'trendn_followers_' + trending.id">
                  {{ trending.followers }}
                </td>
                <td :class="'trendn_following_' + trending.id">
                  {{ trending.following }}
                </td>
                <td :class="'trendn_views_' + trending.id">
                  <i class="fas fa-eye"></i> {{ trending.total_views }}
                </td>
              </table>
              <p class="" style="font-weight: bold">
                {{
                  trending.name.length > 10
                    ? trending.name.substr(0, 10) + '...'
                    : trending.name
                }}
              </p>
              <div
                v-if="user.id == trending.id"
                class="s-text"
                style="padding: 0.4rem"
              >
                Trending!! <i class="fas fa-fire"></i>
              </div>
              <FollowButtonComponent
                v-else
                :account="trending"
                style="width: 100%"
              />
            </div>
          </div>
          <div
            class="trending-info-div"
            style="position: absolute; display: none"
          >
            <div><i class="fas fa-user"></i> {{ trending.name }}</div>
            <div>
              <i class="fas fa-map-marker-alt"></i>
              {{ trending.geo_location }}
            </div>
            <div>
              <i class="fas fa-info-circle"></i>
            </div>
            <div>
              {{ trending.following }} Following
              {{ trending.followers }} Followers
            </div>
            <div>
              <i class="fas fa-eye"></i> {{ trending.total_views }} views
            </div>
          </div>
        </div>
        <span v-if="trendingLoading" class="skeleton-loader">
          <v-skeleton-loader
            class="trendn-col mx-auto"
            max-width="150"
            type="avatar, heading, button"
            min-height="162"
          ></v-skeleton-loader>
          <v-skeleton-loader
            class="trendn-col mx-auto"
            max-width="150"
            type="avatar, heading, button"
            min-height="162"
          ></v-skeleton-loader>
          <v-skeleton-loader
            class="trendn-col mx-auto"
            max-width="150"
            type="avatar, heading, button"
            min-height="162"
          ></v-skeleton-loader>
          <v-skeleton-loader
            class="trendn-col mx-auto"
            max-width="150"
            type="avatar, heading, button"
            min-height="162"
          ></v-skeleton-loader>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Shop from '@/assets/js/api/Shop'
import FollowButtonComponent from '@/components/button/FollowButtonComponent'
export default {
  components: {
    FollowButtonComponent,
  },
  data() {
    return {
      trendings: [],
      trendingLoading: true,
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
  },
  mounted() {
    Shop.getTrending()
      .then((res) => {
        this.trendings = res.data.data
        this.trendingLoading = false
      })
      .catch((err) => {
        this.$root.$emit('alertNotification', {
          status: err.response.status,
        })
      })
  },
  methods: {
    visitUser(event, vname) {
      event.preventDefault()
      if ($(event.target).closest('button').length === 0) {
        this.$router.push({
          name: 'username',
          params: { username: vname },
          query: { v: 'shop' },
        })
      }
    },
  },
}
</script>

<style scoped>
.h-trendn-b {
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.h-trendn {
  width: 75%;
  padding: 0.5rem;
  background: -webkit-linear-gradient(45deg, tomato, gold);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.h-trendn .fas {
  background: -webkit-linear-gradient(45deg, tomato, gold);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.trend-b {
  background: var(--bg-color);
  padding: 0.5rem 12%;
  max-width: 100vw;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  border-radius: 1rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
  position: relative;
  box-shadow: inset -50px 0 50px 0 var(--white-color);
}
.trend-b::-webkit-scrollbar {
  display: none;
}
.trend-b .trendn-col {
  color: inherit;
  text-decoration: none;
  min-width: 135px;
  max-width: 135px;
  background: var(--white-color);
  display: inline-block;
  padding: 0.5rem;
  border-radius: 1rem;
  margin-right: 0.5rem !important;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  min-height: 130px;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
}
.trending-info-div {
  background: var(--bg-color);
  position: absolute;
  padding: 0.5rem;
  display: grid;
  top: 30px;
  left: 0px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
}
.trending-info-div .fas {
  font-size: inherit;
  color: var(--white-color);
  padding: 0.3rem;
  border-radius: 50%;
  background: var(--brand-color);
}
.trendn-col .trendn-help {
  display: none;
  background: none;
  border: none;
  position: absolute;
  top: 5px;
  font-size: inherit;
  font-size: 1rem;
  color: var(--brand-color);
  right: 5px;
}
.trendn-col .sub-div {
  margin: 0 auto;
  display: grid;
  text-align: center;
}
.trend-b .shop-img {
  margin: 0 auto;
}
.trend-b .shop-img img {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  object-fit: cover;
}
.blur-edg {
  display: none;
  height: 202px;
  position: absolute;
  width: 10%;
  /* background: rgba(225, 225, 225, 0.25); */

  backdrop-filter: blur(4px);
  z-index: 1;
}
.lhs-blur {
  background: linear-gradient(
    180deg,
    rgba(225, 225, 225, 0.25),
    rgb(255, 255, 255, 0.25)
  );

  left: 0;
  border-radius: 1rem 0 0 1rem;
}
.rhs-blur {
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255, 0.25),
    rgba(225, 225, 225, 0.25)
  );

  border-radius: 0 1rem 1rem 0;
  right: 0;
}
</style>
