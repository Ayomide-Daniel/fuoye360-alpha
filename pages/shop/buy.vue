<template>
  <div>
    <div class="div-title">
      <div class="title-container">
        <h3 class=""><i class="fas fa-cart-plus"></i> Buy</h3>
      </div>
    </div>
    <br /><br />

    <div class="wrapper">
      <div style="text-align: center">
        <button
          class="browse-shop sb-text"
          style="width: 100%; max-width: 425px; font-size: 1rem"
          @click="showCategory"
        >
          <i class="fas fa-search"></i> Browse Category
          <i class="fas fa-angle-down"></i>
        </button>
      </div>
      <div>
        <div class="category-col">
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'arts' },
            }"
            :class="
              $route.query.category != 'arts' ? 'cat-nselected' : 'cat-selected'
            "
            ><i class="fas fa-palette"></i><br />Arts</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'computing' },
            }"
            :class="
              $route.query.category != 'computing'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-keyboard"></i><br />Computing</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'education' },
            }"
            :class="
              $route.query.category != 'education'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-book"></i><br />Education & Books</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'ecomponents' },
            }"
            :class="
              $route.query.category != 'ecomponents'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-microchip"></i><br />Electrical Components &
            Equipments</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'electronics' },
            }"
            :class="
              $route.query.category != 'electronics'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-tv"></i><br />Electronics</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'fashion' },
            }"
            :class="
              $route.query.category != 'fashion'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-tshirt"></i><br />Fashion</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'food' },
            }"
            :class="
              $route.query.category != 'food' ? 'cat-nselected' : 'cat-selected'
            "
            ><i class="fas fa-utensils"></i><br />Food</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'furniture' },
            }"
            :class="
              $route.query.category != 'furniture'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-chair"></i><br />Furniture</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'gifts' },
            }"
            :class="
              $route.query.category != 'gifts'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-gifts"></i><br />Gift Items</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'health' },
            }"
            :class="
              $route.query.category != 'health'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-stethoscope"></i><br />Health & Beauty</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'housing' },
            }"
            :class="
              $route.query.category != 'housing'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-home"></i><br />Housing</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'music' },
            }"
            :class="
              $route.query.category != 'music'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-music"></i><br />Musical Instruments &
            Equipments</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'phones' },
            }"
            :class="
              $route.query.category != 'phones'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-tablet"></i><br />Phones & Tablets</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'services' },
            }"
            :class="
              $route.query.category != 'services'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-handshake"></i><br />Services & Jobs</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'stationaries' },
            }"
            :class="
              $route.query.category != 'stationaries'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-calculator"></i><br />Stationaries</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'sports' },
            }"
            :class="
              $route.query.category != 'sports'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-futbol"></i><br />Sports & Outdoor</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'transport' },
            }"
            :class="
              $route.query.category != 'transport'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-car"></i><br />Transportation</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'uniforms' },
            }"
            :class="
              $route.query.category != 'uniforms'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-user-tie"></i><br />Uniforms (P.P.E)</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'shop-buy',
              query: { category: 'others' },
            }"
            :class="
              $route.query.category != 'others'
                ? 'cat-nselected'
                : 'cat-selected'
            "
            ><i class="fas fa-ellipsis-h"></i><br />Others</nuxt-link
          >
        </div>
        <div v-if="showSvg" class="shop-empty-col">
          <img
            loading="lazy"
            :src="require('@/assets/illustrations/easter-egg-hunt-animate.svg')"
            alt=""
          />
          <div>
            <p>You're not browsing any CATEGORY currently.</p>
          </div>
        </div>
      </div>
      <br />
      <div id="page-header">
        <h3
          class="product-header sb-text"
          style="border: none; white-space: inherit"
          v-html="pageHeader"
        >
          <!-- {{ pageHeader }} -->
        </h3>
      </div>
      <div
        v-if="emptyProducts && $route.query.category != ''"
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
    <ProductGridComponent />
  </div>
</template>

<script>
import $ from 'jquery'
import ProductGridComponent from '@/components/shop/ProductGridComponent'
export default {
  name: 'Buy',
  components: { ProductGridComponent },
  middleware: ['auth'],
  data() {
    return {
      showSvg: true,
      pageHeader: '',
      emptyProducts: false,
      category: false,
      showEmptyState: false,
    }
  },
  watch: {
    $route() {
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
        this.showSvg = false
        const category = this.$route.query.category
        if (category === 'arts') {
          this.pageHeader = '<i class="fas fa-palette"></i> Arts'
        } else if (category === 'computing') {
          this.pageHeader = '<i class="fas fa-keyboard"></i> Computing'
        } else if (category === 'education') {
          this.pageHeader = '<i class="fas fa-book"></i> Education & Books'
        } else if (category === 'ecomponents') {
          this.pageHeader =
            '<i class="fas fa-microchip"></i> Electrical Components & Equipments'
        } else if (category === 'electronics') {
          this.pageHeader = '<i class="fas fa-tv"></i> Electronics'
        } else if (category === 'fashion') {
          this.pageHeader = '<i class="fas fa-tshirt"></i> Fashion'
        } else if (category === 'food') {
          this.pageHeader = '<i class="fas fa-utensils"></i> Food'
        } else if (category === 'furniture') {
          this.pageHeader = '<i class="fas fa-chair"></i> Furniture'
        } else if (category === 'gifts') {
          this.pageHeader = '<i class="fas fa-gifts"></i> Gift Items'
        } else if (category === 'health') {
          this.pageHeader = '<i class="fas fa-stethoscope"></i> Health & Beauty'
        } else if (category === 'housing') {
          this.pageHeader = '<i class="fas fa-home"></i> Housing'
        } else if (category === 'music') {
          this.pageHeader =
            '<i class="fas fa-music"></i> Musical Instruments & Equipments'
        } else if (category === 'phones') {
          this.pageHeader = '<i class="fas fa-tablet"></i> Phones & Tablets'
        } else if (category === 'services') {
          this.pageHeader = '<i class="fas fa-handshake"></i> Services & Jobs'
        } else if (category === 'stationaries') {
          this.pageHeader = '<i class="fas fa-calculator"></i> Stationaries'
        } else if (category === 'sports') {
          this.pageHeader = '<i class="fas fa-futbol"></i> Sports & Outdoor'
        } else if (category === 'transport') {
          this.pageHeader = '<i class="fas fa-car"></i> Transportation'
        } else if (category === 'uniforms') {
          this.pageHeader = '<i class="fas fa-user-tie"></i> Uniforms (P.P.E)'
        } else if (category === 'others') {
          this.pageHeader = '<i class="fas fa-ellipsis-h"></i> Others'
        }
        this.api = '/shop/buy' + this.$route.query.category
        $('.category-col .cat-nselected').slideToggle()
      } else {
        this.showSvg = true
        this.pageHeader =
          '<i class="fas fa-shopping-bag"></i> Products & Services <i class= "fas fa-handshake"></i>'
        this.api = '/shop/buy'
      }
    },
  },
  mounted() {
    this.$root.$on('emptyProducts', () => {
      this.showEmptyState = true
      this.emptyProducts = true
    })
    this.$root.$on('routeChanged', () => {
      this.emptyProducts = false
    })
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
      this.showSvg = false
      const category = this.$route.query.category
      if (category === 'arts') {
        this.pageHeader = '<i class="fas fa-palette"></i> Arts'
      } else if (category === 'computing') {
        this.pageHeader = '<i class="fas fa-keyboard"></i> Computing'
      } else if (category === 'education') {
        this.pageHeader = '<i class="fas fa-book"></i> Education & Books'
      } else if (category === 'ecomponents') {
        this.pageHeader =
          '<i class="fas fa-microchip"></i> Electrical Components & Equipments'
      } else if (category === 'electronics') {
        this.pageHeader = '<i class="fas fa-tv"></i> Electronics'
      } else if (category === 'fashion') {
        this.pageHeader = '<i class="fas fa-tshirt"></i> Fashion'
      } else if (category === 'food') {
        this.pageHeader = '<i class="fas fa-utensils"></i> Food'
      } else if (category === 'furniture') {
        this.pageHeader = '<i class="fas fa-chair"></i> Furniture'
      } else if (category === 'gifts') {
        this.pageHeader = '<i class="fas fa-gifts"></i> Gift Items'
      } else if (category === 'health') {
        this.pageHeader = '<i class="fas fa-stethoscope"></i> Health & Beauty'
      } else if (category === 'housing') {
        this.pageHeader = '<i class="fas fa-home"></i> Housing'
      } else if (category === 'music') {
        this.pageHeader =
          '<i class="fas fa-music"></i> Musical Instruments & Equipments'
      } else if (category === 'phones') {
        this.pageHeader = '<i class="fas fa-tablet"></i> Phones & Tablets'
      } else if (category === 'services') {
        this.pageHeader = '<i class="fas fa-handshake"></i> Services & Jobs'
      } else if (category === 'stationaries') {
        this.pageHeader = '<i class="fas fa-calculator"></i> Stationaries'
      } else if (category === 'sports') {
        this.pageHeader = '<i class="fas fa-futbol"></i> Sports & Outdoor'
      } else if (category === 'transport') {
        this.pageHeader = '<i class="fas fa-car"></i> Transportation'
      } else if (category === 'uniforms') {
        this.pageHeader = '<i class="fas fa-user-tie"></i> Uniforms (P.P.E)'
      } else if (category === 'others') {
        this.pageHeader = '<i class="fas fa-ellipsis-h"></i> Others'
      }
      this.api = '/shop/buy' + this.$route.query.category
      $('.category-col .cat-nselected').slideToggle()
    } else {
      this.showSvg = true
      this.pageHeader =
        '<i class="fas fa-shopping-bag"></i> Products & Services <i class= "fas fa-handshake"></i>'
      this.api = '/shop/buy'
    }
  },
  methods: {
    showCategory() {
      $('.category-col .cat-nselected').slideToggle()
    },
  },
}
</script>

<style scoped></style>
