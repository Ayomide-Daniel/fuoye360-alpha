<template>
  <div id="products-grid">
    <div :style="products.length <= 0 && !loading ? 'display:none' : ''">
      <div v-if="loading" class="skeleton-loader display-products">
        <v-skeleton-loader
          class="product-div-container skeleton-loader"
          min-width="120"
          type="heading, image, heading"
          min-height="162"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="product-div-container skeleton-loader"
          min-width="120"
          type="heading, image, heading"
          min-height="162"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="product-div-container skeleton-loader"
          min-width="120"
          type="heading, image, heading"
          min-height="162"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="product-div-container skeleton-loader"
          min-width="120"
          type="heading, image, heading"
          min-height="180"
        ></v-skeleton-loader>
      </div>
      <div v-if="products.length > 0" class="display-products">
        <ProductComponent
          v-for="(vproduct, index) in products"
          :key="index"
          :product="vproduct"
          class="product-div-container"
        />
      </div>
    </div>
    <div v-if="products.length <= 0 && !loading" class="wrapper">
      <div v-if="$route.name === 'shop'" class="shop-empty-col">
        <img
          loading="lazy"
          :src="require('@/assets/illustrations/example-animate.svg')"
          alt="No-Products-From-Shops-You-Follow"
        />
        <div>
          <p>Wow! You're not following any shop yet.</p>
          Products and services offered by shops you follow will appear here.
          <nuxt-link :to="{ name: 'shop-buy' }"
            ><i class="fas fa-search"></i> Find exciting Shops</nuxt-link
          >
        </div>
      </div>
      <div v-if="$route.name === 'shop-wishlist'" class="shop-empty-col">
        <img
          loading="lazy"
          :src="require('@/assets/illustrations/reading-list-animate.svg')"
          alt="Empty-Wishlist"
        />
        <div>
          <p>Oops! You haven't added any product to your Wishlist.</p>
          Products added to Wishlist will appear here.
          <nuxt-link :to="{ name: 'shop-buy' }"
            ><i class="fas fa-search"></i> Find exciting Shops</nuxt-link
          >
        </div>
      </div>
      <div v-if="$route.name === 'username'" class="shop-empty-col">
        <img
          loading="lazy"
          :src="require('@/assets/illustrations/lantern_animate.svg')"
          :alt="'Empty-Cart'"
        />
        <div>
          <p>Oops! {{ visited.name }} has no products yet</p>
          Probably a boring guy <br /><br />
          <router-link :to="{ name: 'shop-buy' }"
            ><i class="fas fa-search"></i> Find exciting Shops</router-link
          >
        </div>
      </div>

      <div v-if="$route.name === 'shop-inventory'" class="shop-empty-col">
        <img
          loading="lazy"
          :src="require('@/assets/illustrations/opened-animate.svg')"
          alt="Empty-Inventory"
        />
        <div>
          <p>Oops! You have no product yet.</p>
          Products you're selling will appear here.
          <nuxt-link :to="{ name: 'shop-buy' }"
            ><i class="fas fa-search"></i> Find exciting Shops</nuxt-link
          >
        </div>
      </div>
      <div
        v-if="$route.name === 'shop-buy' && $route.query.category !== ''"
        class="shop-empty-col"
      >
        <img
          loading="lazy"
          :src="require('@/assets/illustrations/easter-egg-hunt-animate.svg')"
          alt="No-Products-Under-This-Category"
        />
        <div>
          <p>Oops! No product under this Category yet.</p>
          <nuxt-link
            :to="{
              name: 'shop-inventory',
              query: { category: $route.query.category },
            }"
            >Be the first to sell under this category</nuxt-link
          >
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
import InfiniteLoading from 'vue-infinite-loading'
import Action from '@/assets/js/api/Action'
import Shop from '@/assets/js/api/Shop'
import ProductComponent from '@/components/shop/ProductComponent'
import ModalComponent from '@/components/shop/ModalComponent'
// import NoSSR from 'vue-no-ssr'

export default {
  components: {
    ProductComponent,
    ModalComponent,
    InfiniteLoading,
    // 'no-ssr': NoSSR,
  },
  props: ['visited'],
  // props: { visited: { type: Object, required: false } },
  data() {
    return {
      products: [],
      loading: true,
      api: '',
      page: 1,
      newProducts: [],
      filterProducts: [],
    }
  },
  watch: {
    $route() {
      this.getProducts()
      return this.infiniteHandler()
    },
  },
  mounted() {
    this.$root.$on('removedFromWishlist', (id) => {
      this.products.forEach((element) => {
        if (element.id === id) {
          element.in_wishlist = false
        }
      })
    })

    this.$root.$on('addedToWishlist', (id) => {
      this.products.forEach((element) => {
        if (element.id === id) {
          element.in_wishlist = true
        }
      })
    })

    this.$root.$on('removeSellerProducts', (id) => {
      this.products = this.products.filter((product) => product.user_id !== id)
    })

    this.$root.$on('addSellerProducts', (id) => {
      Shop.getProducts(id).then((res) => {
        res.data.data.forEach((dataproduct) => {
          this.newProducts.push(dataproduct)
        })
        this.products.forEach((product) => {
          this.newProducts.push(product)
        })
        this.newProducts.forEach((newProduct) => {
          this.filterProducts[newProduct.id] = newProduct
        })
        this.filterProducts = this.filterProducts
          .filter((filterProduct) => filterProduct.length !== 0)
          .reverse()
        this.products = this.filterProducts
        this.newProducts = []
        this.filterProducts = []
      })
    })
    this.$root.$on('visitedDataGotten', () => {
      this.getProducts()
    })
    this.getProducts()
  },
  methods: {
    getProducts() {
      this.loading = true
      this.page = 1
      this.api = ''
      this.products = []
      if (this.$route.name === 'shop') {
        this.api = '/shop'
        return this.infiniteHandler()
      }
      if (this.$route.name === 'shop-inventory') {
        this.api = '/shop/inventory'
        return this.infiniteHandler()
      }
      if (this.$route.name === 'shop-wishlist') {
        this.api = '/shop/wishlist'
        return this.infiniteHandler()
      }
      if (this.$route.name === 'shop-buy') {
        if (
          [
            'arts',
            'computing',
            'education',
            'ecomponents',
            'electronics',
            'fashion',
            'food',
            'furniture',
            'gifts',
            'health',
            'housing',
            'music',
            'phones',
            'services',
            'stationaries',
            'sports',
            'transport',
            'uniforms',
            'others',
          ].includes(this.$route.query.category)
        ) {
          this.api = '/shop/buy/' + this.$route.query.category
          return this.infiniteHandler()
        }
        this.api = '/shop/buy'
        return this.infiniteHandler()
      }
      if (this.$route.name === 'username') {
        if (['', undefined, null].includes(this.visited.id)) {
          return
        }
        this.api = `/shop/${this.visited.id}`
        return this.infiniteHandler()
      }
    },
    confirmDelete() {
      this.$emit('confirmDelete', this.product)
    },
    async infiniteHandler($state) {
      await Action.infiniteLoading(this.api, this.page)
        .then((res) => {
          if (res.data.data.length) {
            this.page += 1
            this.products.push(...res.data.data)
            this.loading = false
            $state.loaded()
          } else {
            this.loading = false
            $state.complete()
          }
          this.requestSent = false
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.response.status })
        })
    },
  },
}
</script>

<style scoped>
.display-products {
  margin: 1.5em 0;
  column-gap: 1rem;
  -moz-column-count: 2;
  -webkit-column-count: 2;
  column-count: 2;
}

@media screen and (min-width: 768px) {
  .modal-product-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
  .modal-product-content .modal-label {
    align-self: center;
    padding: 0.5rem;
  }
  .modal-product-content .vs-footer {
    grid-column: 1/5;
  }
}

@media only screen and (min-width: 400px) {
  .display-products {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}

@media only screen and (min-width: 700px) {
  .display-products {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}

@media only screen and (min-width: 900px) {
  .display-products {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
}

@media only screen and (min-width: 1100px) {
  .display-products {
    -moz-column-count: 5;
    -webkit-column-count: 5;
    column-count: 5;
  }
}

@media only screen and (min-width: 1280px) {
  .wrapper {
    width: 1260px;
  }
}
.product-div-container {
  display: inline-block;
  padding: 0;
  width: 100%;
  position: relative;
  text-align: center;
  border-radius: 0.5rem;
  background: var(--white-color);
  color: var(--dark-color);
  text-decoration: none;
}
.skeleton-loader {
  padding: 0.25rem;
  margin: 0 0 0.75rem;
}
#products-grid {
  padding: 0 0.5rem;
}
</style>
