<template>
  <div>
    <div class="div-title">
      <div class="title-container">
        <h3 class=""><i class="fas fa-heart"></i> Following</h3>
      </div>
    </div>
    <br /><br />
    <div>
      <BroadcastGridComponent />
    </div>
  </div>
</template>

<script>
import BroadcastGridComponent from '@/components/broadcast/BroadcastGridComponent'

export default {
  name: 'Index',
  components: { BroadcastGridComponent },
  middleware: ['auth'],
}
</script>

<style></style>
