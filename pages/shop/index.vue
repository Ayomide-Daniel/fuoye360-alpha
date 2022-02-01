<template>
  <div>
    <div class="div-title">
      <div class="title-container">
        <h3 class=""><i class="fas fa-heart"></i> Following</h3>
      </div>
    </div>
    <br /><br />
    <div class="wrapper">
      <TrendingComponent />
    </div>
    <ProductGridComponent />
  </div>
</template>
<script>
import TrendingComponent from '@/components/shop/TrendingComponent'
import ProductGridComponent from '@/components/shop/ProductGridComponent'
export default {
  components: {
    TrendingComponent,
    ProductGridComponent,
  },
  // middleware: ['auth'],
  data() {
    return {
      title: 'FUOYE360 SHOP | Your one stop for the best vendors and products',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'FUOYE360 SHOP',
        },
      ],
    }
  },
}
</script>
<style></style>
