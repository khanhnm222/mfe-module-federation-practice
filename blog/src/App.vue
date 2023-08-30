<template>
  <div>
    <router-view></router-view>
    <vue-notification-list />
  </div>
</template>
<script>
import { VueNotificationList } from '@dafcoe/vue-notification'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { VueNotificationList }
})
</script>
