<template>
  <div>
    <!-- <div class="wrapper"> -->
    <div class="div-title">
      <div class="title-container inventory-h">
        <h3 class=""><i class="fas fa-store"></i> Inventory</h3>
        <button id="help" @click="showInventoryHelp">
          <i class="fas fa-question-circle"></i> help
        </button>
      </div>
    </div>
    <div
      v-if="!hideHelpModal"
      class="vs-wrapper"
      data-name="help-wrapper"
      @click="closeModal($event)"
    >
      <div class="vs-container">
        <div class="vs-content show-help">
          <h4 class="sb-text" style="border: none">
            Welcome to <i class="fas fa-store"></i> INVENTORY?
          </h4>
          <div
            style="
              background: #f4f4f4;
              border-radius: 1rem 1rem 0 0;
              padding: 0 0.25rem;
            "
          >
            <div class="help-div">
              <p>
                Your Inventory is your store where you can see all your products
                and services either availble for sales or not and make changes
                to them as you see fit.
              </p>
            </div>
            <div class="help-div help-div-2">
              <h4
                class="sb-text"
                style="border-radius: 1rem; border: none:font-size:1rem"
              >
                What should I know <i class="fas fa-question"></i>
              </h4>
              <p>
                <span class="modal-views"
                  ><i class="fas fa-eye"></i> Views</span
                >
                Views are
                <span style="font-weight: bold; color: gold">GOLDEN</span>. They
                show you the number of times your product /service has been
                visited by potential buyers. Thus, the higher the views on your
                product, the more chances for you to make sales
              </p>
              <p>
                <span class="modal-btn-delete"
                  ><i class="fas fa-trash"></i> Delete</span
                >
                This deletes your Product/ Service. Take note though, what is
                dead may never die.
              </p>
              <p>
                <span class="modal-btn-success"
                  ><i class="fas fa-edit"></i> Edit</span
                >
                This enables you to make updates to your Product/ Service
              </p>
              <p>
                <span class="modal-btn-success"
                  ><i class="fas fa-check"></i> Update</span
                >
                This applies the updates you've made to your Product/ Service
              </p>
            </div>
            <div class="help-div help-div-last">
              With <i class="fas fa-heart"></i> from Brown.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DELETE AFFIRMATION -->
    <div
      v-if="!hideDeleteModal"
      class="vs-wrapper"
      data-name="delete-wrapper"
      style="z-index: 6"
      @click="closeModal($event)"
    >
      <div
        class="vs-container"
        style="
          margin: 0;
          padding: 0;
          height: 100vh;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        "
      >
        <div
          class="vs-content"
          style="border-radius: 1rem 1rem 0 0; position: relative"
        >
          <a href="#l-div" class="share-scroll-down"></a>
          <h3 style="text-align: center; margin: 1rem 0">Are you Sure?</h3>
          <form
            style="
              border-radius: 1rem 1rem 0 0;
              display: flex;
              padding: 1rem;
              margin-top: 1rem;
            "
            class="delete-affirmation"
          >
            <button
              type="button"
              name="delete"
              class="delete"
              value="0"
              @click="hideDeleteModal = true"
            >
              No
            </button>
            <button
              type="button"
              name="delete"
              value="1"
              class="delete delete-affirm"
              @click="deleteProduct"
            >
              Yes
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- SELL BUTTON -->
    <div class="sell-btn-div">
      <button @click="showSellModal"><i class="fas fa-plus"></i></button>
    </div>

    <!-- SELL MODAL -->
    <div
      v-if="!hideSellModal"
      class="vs-wrapper"
      style="z-index: 6"
      data-name="sell-wrapper"
      @click="closeModal($event)"
    >
      <div class="vs-container">
        <div class="vs-content" style="max-width: none">
          <a href="#l-div" class="share-scroll-down"></a>
          <br />
          <div class="product-info">
            <div class="form-h">
              <i class="fas fa-info-circle"></i> FILL IN PRODUCT INFO
            </div>
            <br />
            <form
              class="add-to-inventory"
              @submit.prevent="addToInventory($event)"
            >
              <div class="form-product-div">
                <div class="product-img-col">
                  <img
                    id="product-image-display"
                    loading="lazy"
                    :src="
                      product != ''
                        ? $asset('storage/product_images/' + product.image)
                        : require('@/assets/images/productimage.jpg')
                    "
                    alt="product-image"
                    @click="triggerclick"
                  />
                  <input
                    id=""
                    type="file"
                    name="image"
                    accept=".jpeg, .jpg, .png"
                    style="display: none"
                    class="product-sell-image"
                    @change="displayImage($event)"
                  />
                </div>
                <div class="form-product-input">
                  <div class="form-product-irow">
                    <label for="name">Name</label>
                    <!-- placeholder="product | service name" -->
                    <input
                      id="name"
                      type="text"
                      name="name"
                      maxlength="21"
                      :value="product != '' ? product.name : ''"
                      required
                    />
                  </div>
                  <div class="form-product-irow">
                    <label for="category">Category</label>
                    <select
                      id="category"
                      name="category"
                      required
                      :value="product != '' ? product.category : false"
                    >
                      <option value="arts">Arts</option>
                      <option value="computing">Computing</option>
                      <option value="education">Education &amp; Books</option>
                      <option value="ecomponents">
                        Electrical Equipments &amp; Components
                      </option>
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion</option>
                      <option value="food">Food</option>
                      <option value="furniture">Furniture</option>
                      <option value="gifts">Gift Items</option>
                      <option value="health">Health &amp; Beauty</option>
                      <option value="housing">Housing</option>
                      <option value="music">
                        Musical Instruments &amp; Equipments
                      </option>
                      <option value="phones">Phones &amp; Tablets</option>
                      <option value="services">Services</option>
                      <option value="stationaries">Stationaries</option>
                      <option value="sports">Sports &amp; Outdoor</option>
                      <option value="transport">Transportation</option>
                      <option value="uniforms">Uniforms (P.P.E)</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div class="form-product-irow">
                    <label for="status">Status</label>
                    <select
                      id="product-qty"
                      name="status"
                      required
                      :value="product != '' ? product.status : ''"
                    >
                      <option value="1">Pre-Order</option>
                      <option value="2">Available</option>
                    </select>
                  </div>
                  <div class="form-product-irow">
                    <label for="price">Price</label>
                    <div style="display: flex; width: 100%">
                      <span
                        style="
                          border-radius: 0.25rem 0 0 0.25rem;
                          padding: 0.5rem;
                          background: var(--brand-color);
                          color: var(--white-color);
                        "
                        >₦</span
                      >
                      <input
                        type="text"
                        placeholder=""
                        required
                        name="price"
                        style="
                          padding: 0.5rem 0;
                          padding-left: 0.5rem;
                          border-radius: 0 0.25rem 0.25rem 0;
                          width: 100%;
                        "
                        :value="product != '' ? product.price : ''"
                      />
                    </div>
                  </div>
                  <div class="form-product-irow">
                    <label for="tags">Tags</label>
                    <input
                      type="text"
                      placeholder="#"
                      name="tags"
                      :value="product != '' ? product.tags : ''"
                    />
                    <br />
                  </div>
                  <div class="form-product-desc-div">
                    <label for="description" class="product-info-desc"
                      >Description</label
                    >
                    <textarea
                      id="description"
                      name="description"
                      maxlength="200"
                      wrap="soft"
                      required
                      :value="product != '' ? product.description : ''"
                    ></textarea>
                  </div>
                  <div class="sell-btn">
                    <button
                      type="button"
                      class="close close-btn"
                      @click="hideSellModal = true"
                    >
                      CLOSE
                    </button>
                    <button
                      v-if="user.products_lifetime <= 0"
                      type="submit"
                      class="submit-product"
                    >
                      FREE SLOT
                    </button>
                    <paystack
                      v-else-if="
                        user.products_lifetime >= 3 &&
                        user.payment_verified == 0
                      "
                      type="button"
                      :amount="amount"
                      :email="email"
                      :paystackkey="paystackkey"
                      :reference="reference"
                      :callback="callback"
                      :close="close"
                      :embed="false"
                      class="submit-product"
                    >
                      <i class="fas fa-money-bill-alt"></i>
                      PAY 500
                    </paystack>
                    <button v-else type="submit" class="submit-product">
                      SELL
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <ProductGridComponent />
  </div>
</template>

<script>
import ProductGridComponent from '@/components/shop/ProductGridComponent'
import $ from 'jquery'

export default {
  name: 'Inventory',
  components: {
    ProductGridComponent,
  },
  middleware: ['auth'],
  data() {
    return {
      hideDeleteModal: true,
      hideHelpModal: true,
      hideSellModal: true,
      paystackkey: 'pk_live_6fc4307b61b69baa2c77d83386769c5eaab9c478', // paystack public key
      amount: 50000, // in kobo,
      email: 'ayomidedaniel@g.com',
      product: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
    reference() {
      let text = ''
      const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

      return text
    },
  },
  mounted() {
    this.$root.$on('confirmDelete', (product) => {
      this.product = product
      this.hideDeleteModal = false
    })
    this.$root.$on('editProduct', (product) => {
      this.product = product
      // const options = $('#category option')
      // for (let index = 0; index < options.length; index++) {
      //   const element = options[index]
      //   if (element.value === this.product.category) {
      //     $(element).attr('selected', true)
      //   }
      // }
      // options.forEach((element) => {
      // })
      this.hideSellModal = false
    })
  },
  methods: {
    callback(response) {
      //   console.log(response)
    },
    close() {
      //   console.log('Payment closed')
    },
    confirmDelete(data) {
      this.product = data
      $('.delete-alert-col-hide').show()
    },
    deleteProduct() {
      return false
    },
    showSellModal() {
      this.hideSellModal = false
    },
    triggerclick() {
      $('.product-sell-image').click()
    },
    closeModal(e) {
      if ($(e.target).closest('.vs-content').length === 0) {
        const modalName = $(e.target).data('name')
        // $('.add-to-inventory')[0].reset()
        if (modalName === 'sell-wrapper') {
          return (this.hideSellModal = true)
        }
        if (modalName === 'help-wrapper') {
          return (this.hideHelpModal = true)
        }
        if (modalName === 'delete-wrapper') {
          return (this.hideDeleteModal = true)
        }
      }
    },
    showInventoryHelp() {
      this.hideHelpModal = false
    },
  },
}
</script>

<style scoped>
.close-sell-modal {
  outline: none;
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: none;
  font: inherit;
  color: var(--red-color);
  font-size: 1.8rem;
  font-weight: bold;
}
.sell-btn-div {
  position: fixed;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 70px;
  left: 15px;
  z-index: 1;
}
.sell-btn-div button {
  display: inline-block;
  width: inherit;
  height: inherit;
  color: var(--brand-color);
  border-radius: 50%;
  background: var(--white-color);
  border: none;
  box-shadow: 0 0 14px var(--brand-color-bg);
  font-size: 1.1rem;
}
.inventory-h {
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 75% 25%;
  justify-content: center;
  align-items: center;
}
#help {
  border: none;
  font-size: inherit;
  font-weight: normal;
  padding: 0.3rem;
  color: var(--white-color);
  border-radius: 1rem;
  background: var(--brand-color);
  cursor: pointer;
  box-shadow: 0 0 10px var(--brand-color-bg);
}
.inventory-img {
  height: 330px;
}
.inventory-img img {
  height: 100%;
}
.show-help .close {
  float: right;
  font-size: 2rem;
  color: var(--red-color);
  cursor: pointer;
}
.help-div .sb-text {
  width: 75%;
  margin: 0 auto;
}
.help-div p {
  line-height: 1.8rem;
  margin: 0.8rem 0;
  font-size: 0.9rem;
  padding: 0.2rem;
  text-indent: 0.5rem;
}
.help-div-2 span {
  border-radius: 5px;
}
.help-div .modal-views {
  border: none;
  width: fit-content;
  font-size: 1em;
  padding: 0.5em;
  background: linear-gradient(45deg, tomato, gold);
  color: var(--white-color);
}
.help-div .modal-btn-success {
  border-radius: 5px;
  border: none;
  width: fit-content;
  font-size: 1em;
  padding: 0.5em;
  box-shadow: 0 0 14px var(--brand-color-bg);
  background: var(--brand-color);
  color: var(--white-color);
  font-weight: bold;
  text-transform: uppercase;
}
.help-div .modal-btn-delete {
  border: none;
  width: fit-content;
  font-size: 1em;
  padding: 0.5em;
  background: rgba(239, 59, 34, 0.92);
  color: var(--white-color);
  font-weight: bold;
  text-transform: uppercase;
}
.help-div-last {
  text-align: center;
  color: var(--brand-color);
  font-family: cursive;
}
.help-div-last2 {
  display: inline;
  width: 100%;
}
.social-links a {
  color: #111;
}

button,
input,
select,
textarea {
  background-color: var(--white-color);
}
.product-info {
  margin-top: 1rem;
  padding: 0.3rem;
  background: var(--bg-color);
  border-radius: 1rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
}

.product-info .content {
  background: none;
  font-weight: bold;
}
.vs-content .form-h {
  width: 75%;
  background: var(--brand-color);
  padding: 0.5rem;
  color: var(--white-color);
  text-align: center;
  border-radius: 0.5rem;
  margin: 0 auto;
  font-weight: bold;
  margin-top: 0.5rem;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  -ms-border-radius: 0.5rem;
  -o-border-radius: 0.5rem;
}

.product-info form {
  padding: 0.5rem;
}

.form-product-input {
  margin-top: 0.7rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.7rem;
}

.product-info .product-img-col img {
  width: 90%;
  height: auto;
  border-radius: 1rem;
  cursor: pointer;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
}

.product-info form label {
  font-weight: bold;
  text-align: center;
  border-radius: 0.4rem;
  -webkit-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  -ms-border-radius: 0.4rem;
  -o-border-radius: 0.4rem;
  padding: 0.5rem;
  color: var(--brand-color);
  border: 1.5px solid var(--brand-color);
  margin-right: 0.25rem;
}

.form-product-irow {
  display: flex;
  align-items: center;
  width: 100%;
}

.product-info input,
.product-info select,
.product-info option,
.product-info textarea {
  height: inherit;
  font: inherit;
  font-size: inherit;
  width: inherit;
  padding: 0.5rem;
  border: none;
  border: 1px solid var(--input-border-color);
  border-radius: 0.25rem;
  /* outline: none; */
}

.product-info form .threeD-btn {
  background: var(--white-color);
  color: var(--brand-color);
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
  -webkit-border-radius: 0.3rem;
  -moz-border-radius: 0.3rem;
  -ms-border-radius: 0.3rem;
  -o-border-radius: 0.3rem;
}

.form-product-desc-div {
  display: grid;
  width: inherit;
}

.product-info-desc {
  margin-bottom: 0.5rem;
}

.product-info form textarea {
  width: inherit;
  height: 20vh;
  overflow: hidden;
  resize: none;
  margin-top: 0.5rem;
}

.product-info form .sell-btn {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.product-info form button,
paystack {
  border: none;
  border: 1px solid var(--brand-color);
  color: var(--brand-color);
  background: var(--white-color);
  padding: 0.5rem;
  font: inherit;
  font-weight: bold;
  width: 45%;
  margin-right: 0.5rem;
  border-radius: 1rem;
  text-transform: uppercase;
  text-align: center;
}

.product-info form .submit-product {
  color: var(--white-color);
  background: var(--brand-color);
}

.product-info .submit-product:hover {
  opacity: 1;
}
@media screen and (min-width: 768px) {
  .form-product-div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
    align-items: center;
  }
  .form-product-div img {
    width: 95% !important;
  }
  .product-img-col {
    margin: 0 auto;
  }
}

.delete-affirmation button {
  width: 100%;
  cursor: pointer;
  padding: 0.5rem;
  min-width: 25%;
  border: none;
  background: var(--red-color);
  color: var(--white-color);
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  -ms-border-radius: 0.5rem;
  -o-border-radius: 0.5rem;
  margin: 0.5rem;
}

.delete-affirmation .delete-affirm {
  background: none;
  border: 2px solid var(--red-color);
  color: var(--red-color);
}

.delete-affirmation button:hover {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
}
</style>
