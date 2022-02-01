<template>
  <div>
    <div class="div-title">
      <div class="title-container">
        <h3 class=""><i class="fas fa-fire"></i> Trending</h3>
      </div>
    </div>
    <br /><br />
    <div>
      <BroadcastGridComponent />
    </div>
  </div>
</template>

<script>
import BroadcastGridComponent from '~/components/broadcast/BroadcastGridComponent.vue'
export default {
  name: 'Trending',
  components: { BroadcastGridComponent },
  middleware: ['auth'],
}
</script>

<style scoped></style>
