<template>
  <div>
    <ThreadComponent />
    <BroadcastGridComponent />
  </div>
</template>

<script>
import ThreadComponent from '~/components/broadcast/ThreadComponent.vue'
import BroadcastGridComponent from '~/components/broadcast/BroadcastGridComponent.vue'
export default {
  name: 'Id',
  components: { ThreadComponent, BroadcastGridComponent },
  middleware: ['auth'],
  mounted() {
    this.setThreadPage()
  },
  methods: { setThreadPage() {} },
}
</script>

<style scoped></style>
