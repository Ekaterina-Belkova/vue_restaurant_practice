<template>
  <div class="container">
    <TheHeader />
    <TheMain />
  </div>
</template>

<script>
import TheHeader from '@/components/blocks/TheHeader'
import TheMain from '@/components/blocks/TheMain'

export default {
  name: 'MainPage',
  components: {
    TheHeader,
    TheMain
  }
}
</script>
