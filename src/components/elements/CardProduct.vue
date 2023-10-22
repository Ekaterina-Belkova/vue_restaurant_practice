<template>
  <div class="card">
    <img :src="urlImg" alt="" class="preview">
    <span class="item">
      {{ item }}
    </span>

    <span class="description">
      {{ description }}
    </span>

    <span class="price">
      {{ price }}

      <addIcon />
    </span>
  </div>
</template>

<script>
import addIcon from '@/components/icons/addIcon.vue'

export default {
  name: 'CardProduct',
  components: {
    addIcon
  },
  props: {
    urlImg: {
      type: String,
      default: ''
    },
    item: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 312px;
  height: 552px;
  gap: 45px;
  padding: 21px;
  border: 1px solid #D58C51;
  color: #FFF;
  font-size: 17px;
  font-weight: 500;
}

.item {
  font-size: 17px;
  font-weight: 500;
}

.description {
  font-size: 14px;
  font-weight: 400;
}

.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 17px;
  font-weight: 500;
}
</style>
