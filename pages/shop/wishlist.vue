<template>
  <div>
    <div class="div-title">
      <div class="title-container">
        <h3 class=""><i class="fas fa-bookmark"></i> Wishlist</h3>
      </div>
    </div>
    <br /><br />
    <ProductGridComponent />
  </div>
</template>

<script>
import ProductGridComponent from '@/components/shop/ProductGridComponent'
export default {
  name: 'Wishlist',
  components: {
    ProductGridComponent,
  },
  middleware: ['auth'],
  mounted() {},
}
</script>

<style scoped></style>
