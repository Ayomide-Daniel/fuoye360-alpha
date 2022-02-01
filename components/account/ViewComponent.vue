<template>
  <div>
    <div v-if="$route.query.v === 'shop'">
      <ProductGridComponent :visited="visited" />
    </div>
    <div v-else-if="['following', 'follower'].includes($route.query.v)">
      <FollowersComponent :visited="visited" />
    </div>
    <div v-else-if="$route.query.v === 'broadcast'">
      <BroadcastGridComponent :visited="visited" />
    </div>
  </div>
</template>

<script>
import ProductGridComponent from '@/components/shop/ProductGridComponent'
import FollowersComponent from '@/components/account/FollowersComponent'
import BroadcastGridComponent from '../broadcast/BroadcastGridComponent.vue'
export default {
  name: 'ViewComponent',
  components: {
    ProductGridComponent,
    FollowersComponent,
    BroadcastGridComponent,
  },
  props: ['visited'],
}
</script>

<style scoped></style>
