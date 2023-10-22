<template>
  <header class="header">
    <h2 class="title">НАША ПРОДУКЦИЯ</h2>
    <div class="basket">
      <span class="items">3 товара
на сумму 3 500 ₽</span>

      <router-link to="/basket">
        <busketIcon />
      </router-link>
    </div>
  </header>
</template>

<script>
import busketIcon from '@/components/icons/busketIcon.vue'

export default {
  name: 'TheHeader',
  components: {
    busketIcon
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.basket {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
.title {
  color: #FFF;
  font-size: 31px;
  font-weight: 700;
}

.items {
  display: flex;
  justify-content: flex-end;
  color: #FFF;
  text-align: right;
  font-size: 17px;
  font-weight: 500;
  }

</style>
