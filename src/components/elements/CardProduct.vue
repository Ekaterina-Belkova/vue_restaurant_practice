<template>
  <div class="card">
    <img :src="urlImg" alt="" class="preview">
    <span class="item">
      {{ item }}
    </span>

    <span class="description">
      {{ description }}
    </span>

    <span class="card__footer">
      {{ price }}

      <AddButton @click="addToCard"/>
    </span>
  </div>
</template>

<script>
import AddButton from '@/components/ui/AddButton.vue'

export default {
  name: 'CardProduct',
  components: {
    AddButton
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
    const addToCard = () => {
      console.log('Клик по кнопке произошел')
    }
    return {
      addToCard
    }
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

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 17px;
  font-weight: 500;
}

.item.description.card__footer:hover {
    color: #D58C51;
}
</style>
