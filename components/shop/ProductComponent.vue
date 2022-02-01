<template>
  <div
    class="product-div-container"
    @click="showModal(product.id, product, $event)"
  >
    <div class="product-div">
      <div v-if="loading" class="loading-animation">
        <v-progress-circular
          indeterminate
          color="white"
          width="3"
          size="20"
        ></v-progress-circular>
      </div>
      <span class="product-category">{{ product.category }}</span>
      <div class="img-col">
        <span v-if="product.status == 1" class="product-status text-error">
          Pre-Order
        </span>
        <span v-else-if="product.status == 2" class="product-status text-error">
          Available
        </span>
        <span v-else-if="product.status == 3" class="product-status text-error">
          Sold-Out
        </span>
        <span class="product-price alert-success">₦ {{ product.price }}</span>
        <img
          loading="lazy"
          class="product-image"
          :src="$asset('storage/product_images/' + product.image)"
          :alt="product.name"
        /><br />
      </div>
      <div class="min-descrip">
        {{
          product.name.length > 10
            ? product.name.substr(0, 10) + '...'
            : product.name
        }}
      </div>
    </div>
  </div>
</template>

<script>
import Action from '@/assets/js/api/Action'
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  mounted() {
    this.$root.$on('modalShown', (id) => {})
  },
  methods: {
    async showModal(id, product) {
      this.loading = true
      await Action.updateProductViews(id)
        .then((res) => {
          this.$root.$emit('showModal', { response: res.data.data, product })
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.response.status })
        })
      this.loading = false
    },
  },
}
</script>

<style scoped>
.product-div-container {
  display: inline-block;
  padding: 0;
  margin: 0 0 1rem;
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  position: relative;
  text-align: center;
  border-radius: 0.5rem;
  background: var(--white-color);
  color: var(--dark-color);
  text-decoration: none;
  transition: all ease-in-out 500ms;
}

.product-div {
  padding: 0.25rem;
}

.product-div .img-col {
  position: relative;
  margin: 0 auto;
  border-radius: 0.5rem;
  transition: all ease-in-out 3000ms;
  -webkit-transition: all ease-in-out 3000ms;
  -moz-transition: all ease-in-out 3000ms;
  -ms-transition: all ease-in-out 3000ms;
  -o-transition: all ease-in-out 3000ms;
  display: flex;
  height: -webkit-fill-available;
}
.product-div .img-col::before {
  transition: all ease-in-out 3000ms;
  -webkit-transition: all ease-in-out 3000ms;
  -moz-transition: all ease-in-out 3000ms;
  -ms-transition: all ease-in-out 3000ms;
  -o-transition: all ease-in-out 3000ms;
}
.product-div .img-col:hover::before {
  position: absolute;
  width: 100%;
  height: -webkit-fill-available;
  content: '';
  display: block;
  background: var(--light-bg);
  z-index: 1;
  cursor: pointer;
}
.img-col .product-status {
  font-weight: 600;
  color: var(--white-color);
  position: absolute;
  width: fit-content;
  height: fit-content;
  padding: 0.25rem;
  right: 0;
  top: 0;
  margin: 0;
  font-size: 0.8rem;
  text-transform: capitalize;
  border-radius: 5px 0 0 5px;
  opacity: 0.7;
}
.img-col .product-price {
  color: var(--white-color);
  background: var(--brand-color);
  position: absolute;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  right: 0;
  bottom: 0;
  margin: 0;
  font-size: 0.8rem;
  text-transform: capitalize;
  border-radius: 5px 0 0 5px;
  opacity: 0.9;
}
.product-div .product-image {
  object-fit: cover;
  border-radius: 0;
  background-clip: content-box;
  height: 100%;
  width: 100%;
  min-height: 100px;
  display: block;
}
.min-descrip {
  text-decoration: underline;
  font-weight: bold;
  margin: 0;
  text-transform: capitalize;
  word-break: break-all;
}
.product-category {
  text-transform: uppercase;
  color: var(--dark-grey);
  font-size: 0.8em;
  padding: 0;
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
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
</style>
