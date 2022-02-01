<template>
  <div
    v-if="showModalBlock"
    class="vs-wrapper"
    @click="checkToCloseModal($event)"
  >
    <div class="vs-container">
      <div class="vs-content" style="max-width: unset">
        <div class="vs-header">
          <span class="modal-product-category">{{ product.category }}</span>
          <h3 class="modal-product-name sb-text">{{ product.name }}</h3>
          <button class="close-modal closeBtn" @click="closeModal">
            &times;
          </button>
        </div>
        <div class="content-bg">
          <div class="modal-product-content">
            <div>
              <div class="modal-image-col">
                <div id="render-block" class="modal-image">
                  <span v-if="product.status == 1" class="modal-product-status">
                    Pre-Order
                  </span>
                  <span
                    v-else-if="product.status == 2"
                    class="modal-product-status"
                  >
                    Available
                  </span>
                  <span
                    v-else-if="product.status == 3"
                    class="modal-product-status"
                  >
                    Sold-Out
                  </span>
                  <span class="modal-product-price">₦ {{ product.price }}</span>
                  <img
                    loading="lazy"
                    :src="$asset('storage/product_images/' + product.image)"
                    :alt="product.name"
                    style="vertical-align: unset; min-height: 100px"
                    @click="viewImage"
                  />
                </div>
              </div>
            </div>
            <div>
              <div class="modal-label">
                <div
                  v-if="
                    $route.name != 'shop-inventory' && $route.name != 'visit'
                  "
                  class="shop-info"
                >
                  <router-link
                    :to="{
                      name: 'username',
                      params: { username: product.user.name },
                      query: { v: 'shop', pid: product.id },
                    }"
                    class="shop-info-profile"
                    style="text-decoration: underline"
                  >
                    <img
                      loading="lazy"
                      :src="
                        $asset('storage/profile_images/' + product.user.image)
                      "
                      :alt="product.user.name"
                      class="seller-image"
                    />
                    <span
                      class="seller-name"
                      style="
                        font-weight: bold;
                        margin-left: 0.5rem;
                        word-break: break-word;
                      "
                      >{{ product.user.name }}</span
                    >
                  </router-link>
                </div>
                <span
                  class="modal-product-details"
                  v-html="product.description"
                >
                  <!-- {{ product.description }} -->
                </span>
                <div
                  v-if="$route.name != 'shop-inventory'"
                  class="modal-form-qty"
                >
                  <div class="form-qty-func">
                    <button type="button" @click="minusQty">&minus;</button>
                    <input
                      id="order-qty"
                      v-model="form.qty"
                      type="number"
                      class="modal-product-qty"
                      name="modal-product-qty"
                      :disabled="$route.name == 'shop-cart'"
                      @change="checkQty"
                    />
                    <button type="button" @click="addQty">&plus;</button>
                  </div>
                </div>
                <div>
                  <div class="modal-product-view-col">
                    <i class="fa fa-eye"></i>
                    <span id="modal-product-view">{{ product.views }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="vs-footer">
              <div
                v-if="$route.name == 'shop-inventory'"
                class="modal-footer-container"
              >
                <div></div>
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    name="button"
                    class="closeBtn"
                    @click="showModalBlock = false"
                  >
                    Close
                  </button>
                  <button
                    id="delete-product"
                    type="submit"
                    name="button"
                    class="modal-btn-delete"
                    style="min-width: 60px"
                    @click="confirmDelete"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                  <button
                    type="button"
                    class="modal-btn-success modal-edit"
                    style="min-width: 60px"
                    @click="editProduct"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                </div>
              </div>
              <div v-else class="modal-footer-container">
                <div v-if="showWishlist" class="wishlist-btn-col">
                  <button
                    v-if="product.in_wishlist"
                    class="rmv-wishlist"
                    @click="removeFromWishlist"
                  >
                    <i class="far fa-bookmark"></i>
                  </button>
                  <button v-else class="wishlist" @click="addToWishlist">
                    <i class="far fa-bookmark"></i>
                  </button>
                </div>
                <div v-else></div>
                <div
                  v-if="$route.name != 'shop-inventory'"
                  class="modal-footer-btn"
                >
                  <button class="closeBtn" @click="showModalBlock = false">
                    Close
                  </button>
                  <button
                    v-if="showWishlist"
                    type="submit"
                    class="modal-btn-success add-to-cart"
                    @click="addToCart($event)"
                  >
                    <i class="fas fa-phone-alt"></i> Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Action from '@/assets/js/api/Action'
// import Shop from '@/assets/js/api/Shop'

export default {
  name: 'ModalComponent',
  data() {
    return {
      form: {
        productid: '',
        action: '',
        sellername: '',
        sellerid: '',
        sellerimgsource: '',
        page: '',
        qty: 1,
        id: '',
      },

      product: {},
      showWishlist: '',
      addWishlist: '',
      showModalBlock: false,
    }
  },
  mounted() {
    this.$root.$on('showModal', ({ response, product }) => {
      this.product = product
      this.form.qty = 1
      this.form.id = product.id
      this.form.productid = product.id
      this.form.sellerid = product.user.id
      this.form.sellername = product.user.name

      if (response.status === 200) {
        this.product.views = ' ' + response.views + ' views'
        this.showWishlist = true
      } else {
        $('.modal-form-qty, .wishlist, .add-to-cart').hide()
        this.product.views = ' ' + response.views + ' views'
      }
      return (this.showModalBlock = true)
      // $(".seller-name").text(this.form.sellername);
      // $("#product-id").text($(".tableproductid_" + id).text());
      // $(".social-links").html("<a href='https://api.whatsapp.com/send?phone=&text=Guys! I just found an awesome product on ```FUOYE360 SHOP```. Check it out on https://fuoye360.com/shop/buy?pid=" + id + "' target='_blank'><i class='fab fa-whatsapp'></i></a> <a href='https://twitter.com/intent/tweet?text=Guys! I just found an awesome product on FUOYE360 SHOP. Check it out on https://fuoye360.com/shop/buy?pid=" + id + " %23fuoye360%23fuoye360shop' target='_blank'><i class='fab fa-twitter'></i></a>");
    })
    this.$root.$on('routeChanged', () => {
      this.profile_card_hide = true
      this.$root.$emit('hideProfileCard')
    })

    this.$root.$on('routeChanged', () => {
      this.showModalBlock = false
    })
  },
  methods: {
    checkToCloseModal(e) {
      if ($(e.target).closest('.vs-content').length === 0) {
        return this.closeModal()
      }
    },
    viewImage() {
      this.$root.$emit('viewImage', $('.tableimg_' + this.form.id).text())
    },
    addQty() {
      return ++this.form.qty
    },
    minusQty() {
      if (this.form.qty <= 1) {
        return (this.form.qty = 1)
      }
      return --this.form.qty
    },
    checkQty() {
      if (this.form.qty < 1) {
        return (this.form.qty = 1)
      }
    },
    closeModal() {
      $('.loading_' + this.form.id).hide()
      this.showModalBlock = false
      return (this.form.qty = 1)
    },
    async addToWishlist() {
      await Action.addToWishlist(this.product.id)
        .then(() => {
          this.$root.$emit('addedToWishlist', this.product.id)
          // this.addWishlist = false
          this.product.in_wishlist = true
          this.$root.$emit('alertNotification', {
            message: 'Added To Wishlist',
          })
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.response.status })
        })
    },
    async removeFromWishlist() {
      await Action.removeFromWishlist(this.product.id)
        .then(() => {
          this.product.in_wishlist = false
          // this.addWishlist = true
          this.$root.$emit('RemovedFromWishlist', this.product.id)
          this.$root.$emit('alertNotification', {
            message: 'Removed From Wishlist',
          })
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.response.status })
        })
    },
    // async addToCart(e) {
    //   await $(e.target)
    //     .css('opacity', '.75')
    //     .html('<span class="loading-circle "></span> ADDING...')
    //   await Action.addToCart(this.form.productid, this.form.qty).catch(
    //     (err) => {
    //       this.$root.$emit('alertNotification', { status: err.response.status })
    //     }
    //   )
    //   await $(e.target)
    //     .css('opacity', '1')
    //     .html('<i class="fas fa-shopping-cart"></i> ADD TO CART')
    // },
    confirmDelete() {
      this.$root.$emit('confirmDelete', this.product)
    },
    editProduct() {
      this.$root.$emit('editProduct', this.product)
    },
  },
}
</script>

<style scoped>
.modal .sb-text {
  box-shadow: none;
  border-radius: 0;
  max-width: 100%;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  -o-border-radius: 0;
}
.modal-label .success {
  font-size: 1rem;
  font-weight: 500;
  padding: 0.4rem;
}
.vs-header {
  margin-bottom: 0.5rem;
  padding: 0 0.5rem 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
}
.vs-header .modal-product-name {
  text-align: center;
  font-size: 1.2rem;
  margin: 0;
  margin-left: 0.5rem;
  border: none;
  padding: 0.5rem;
  width: 50%;
  text-align: left;
  white-space: normal;
}
.vs-header .close-modal {
  position: absolute;
  right: 0.25rem;
  top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  color: var(--red-color);
  font-size: 2rem;
  height: 2rem;
  border: 1px solid var(--red-color);
  border-radius: 0.3rem;
  -webkit-border-radius: 0.3rem;
  -moz-border-radius: 0.3rem;
  -ms-border-radius: 0.3rem;
  -o-border-radius: 0.3rem;
}
.vs-header .modal-product-category {
  text-transform: uppercase;
  color: var(--dark-grey);
  font-size: 0.8rem;
  padding: 0;
  margin: 0;
  font-size: 0.75rem;
  padding-right: 0.5rem;
  border-right: 1px solid var(--dark-grey);
}
.closeBtn:hover,
.closeBtn:focus {
  cursor: pointer;
}
.modal-product-content {
  margin: 0 auto;
}
.modal-product-content div {
  margin: 0.2rem 0;
}
.modal-product-content .modal-image-col {
  align-content: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  position: relative;
  width: auto;
}
.modal-product-content .shop-info-profile {
  display: flex;
  align-items: center;
  color: inherit;
}
.modal-share-btn {
  background: none;
  padding: 0.5rem;
}
.shop-info-profile span,
.shop-info-profile .seller-image {
  margin-right: 0.5rem;
}
.shop-info-profile .seller-image {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  object-fit: cover;
  margin: 0;
}
.modal-image-col .modal-image {
  height: auto;
  width: 100%;
  position: relative;
  margin: 0.5rem 0;
}
.modal-image .modal-product-status {
  line-height: 2rem;
  position: absolute;
  right: 0;
  top: 0;
  width: fit-content;
  height: fit-content;
  margin: 0;
  text-transform: capitalize;
  padding: 0.3rem;
  opacity: 0.6;
  font-size: 0.8rem;
  /* background: var(--red-color); */
  font-weight: 600;

  color: var(--white-color);
  border-radius: 0 1rem;
}
.modal-image .modal-product-price {
  position: absolute;
  line-height: 2rem;
  padding: 0.3rem;
  bottom: 0;
  right: 0;
  background: var(--brand-color);
  width: fit-content;
  height: fit-content;
  margin-bottom: 0.4rem;
  font-size: 0.8rem;
  text-transform: capitalize;
  opacity: 0.9;
  color: var(--white-color);
  border-radius: 1rem 0;
}
.vs-content img {
  height: auto;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  border-radius: 1rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
  object-fit: cover;
}
.modal-label {
  display: grid;
  align-items: center;
  position: relative;
}
.modal-product-view-col {
  margin-top: 0.3rem;
  width: max-content;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background: linear-gradient(45deg, tomato, gold);
  color: var(--white-color);
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
}
.shop-info-profile .visit-shop {
  text-decoration: none;
  text-transform: capitalize;
  background: var(--brand-color);
  font-weight: 500;
  border: none;
  padding: 0.5rem;
  color: var(--white-color);
  border-radius: 1rem;
  cursor: pointer;
  font-weight: bold;
}
.product-label {
  border-radius: 5px;
  color: var(--white-color);
}
.modal-form-qty {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-form-qty label {
  padding: 0.2rem 0.4rem !important;
}
.form-qty-func {
  display: grid;
  align-items: center;
  margin: 0 !important;
  margin-left: 0.25rem !important;
  grid-template-columns: repeat(3, 1fr);
}
.form-qty-func button {
  background: var(--white-color);
  padding: 0;
  border: none;
  font: inherit;
  width: 100%;
  border: 1px solid var(--input-border-color);
  border-radius: 0.15rem;
}
.form-qty-func input {
  text-align: center;
  font: inherit;
  width: 100px;
  margin: 0.25rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: bold;
  background: var(--white-color);
}
.vs-footer {
  border-top: 1px solid var(--dark-grey);
  margin-top: 0.5rem;
  padding-top: 0.5rem;
}
.modal-footer-container {
  display: grid;
  grid-template-columns: 10% 90%;
  align-items: center;
  justify-items: flex-end;
}
.vs-footer button {
  background: var(--white-color);
  padding: 0.5rem;
  border: 1px solid var(--input-border-color);
  cursor: pointer;
  border-radius: 0.3rem;
  margin-left: 0.25rem;
  text-transform: uppercase;
  font-weight: bold;
}
.vs-footer .rmv-wishlist {
  border: 2px solid var(--brand-color);
  background: var(--brand-color);
  color: var(--white-color);
}
.modal-btn-delete {
  background: var(--red-color) !important;
  color: var(--white-color);
  border: none !important;
  text-transform: uppercase;
  font-weight: bold;
}
.modal-product-content .modal-edit-product {
  padding-top: 1rem;
  width: 100%;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: 1fr;
  grid-gap: 0.3rem;
}
.modal-product-content label {
  font-size: 1.05rem;
  border-radius: 0.3rem;
  padding: 0.3rem;
  font-weight: 500;
  margin-right: 0.5rem;
}
.modal-edit-product .modal-editstatus {
  background: var(--red-color);
  color: var(--white-color);
}
.modal-edit-statusVal {
  margin-left: 0.5rem;
  margin-right: 0.2rem;
}
.modal-edit-product input[type='number'] {
  font-size: inherit;
  width: 35%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.3rem;
  line-height: 1.2rem;
}
.modal-edit-product textarea {
  height: 70px;
  width: 95%;
  line-height: 1.2rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  overflow: hidden;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
}
.vs-footer .modal-btn-delete {
  border: none;
  width: fit-content;
  padding: 0.5rem;
  background: var(--red-color);
  color: var(--white-color);
  font-weight: bold;
}
.vs-footer .modal-btn-success {
  border: none;
  width: fit-content;
  padding: 0.5rem;
  box-shadow: 0 0 4px var(--brand-color-bg);
  background: var(--brand-color);
  color: var(--white-color);
  font-weight: bold;
  text-transform: uppercase;
}
.content-bg {
  background: var(--bg-color);
  border-radius: 1rem 1rem 0 0;
  padding: 0 0.5rem 0.5rem;
}

@media screen and (min-width: 768px) {
  .product-img-col {
    margin: 0 auto;
  }
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
</style>
