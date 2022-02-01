<template>
  <div class="alert-div">
    <v-alert
      v-for="error in messages"
      :key="error.id"
      transition="scale-transition"
      :type="error.type == undefined ? 'warning' : 'success'"
      border="left"
      dismissible
      elevation="5"
    >
      <span class="alert-text">{{ error.message }}</span>
    </v-alert>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [],
      visibility: [],
      alerts: [],
    }
  },
  watch: {
    async messages() {
      await this.messages.forEach((e, index) => {
        setTimeout(() => {
          this.messages.filter((message, i) => i !== index)
        }, 1000)
      })
    },
    visibility(val) {
      if (val) {
        // Custom action when the alert was shown
      } else {
        // Custom action when the alert was hidden
      }
      // eslint-disable-next-line no-console
      console.log(val)
    },
  },
  mounted() {
    this.$root.$on('alertNotification', (data) => {
      this.alerts.push(data)
      const messageToPush = []
      this.alerts.forEach((element) => {
        if (element.status === 422) {
          if (element.errors !== undefined) {
            const obj = element.errors.errors
            Object.keys(obj).forEach((key) => {
              obj[key].forEach((e) => {
                messageToPush.push({ message: e })
              })
            })
            return
          }
        }
        if (element.status === 401) {
          return messageToPush.push({
            message: 'Oops! You have to Login',
          })
        }
        if (element.status === 500) {
          return messageToPush.push({ message: 'Oops! An error occured!' })
        }

        if (element.line !== undefined) {
          return messageToPush.push({
            message: 'Oops! An error occured. Try again later',
          })
        }
        if (element.status === 419) {
          return messageToPush.push({
            message: 'Oops! An error occured kindly reload the webpage',
          })
        }
        return messageToPush.push({
          message: element.message,
          type: 'success',
        })
      })
      return (this.messages = messageToPush)
    })
  },
  methods: {},
}
</script>
<style scoped>
.alert-div {
  position: fixed;
  z-index: 11;
  bottom: 0;
  right: 1rem;
  background: none;
  width: 90%;
  max-width: 380px;
}
.alert-text {
  font: inherit;
  font-family: 'Montserrat', sans-serif;
  word-break: break-word;
}
</style>
