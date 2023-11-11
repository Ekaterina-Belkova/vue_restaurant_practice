<template>
  <div class ="addbutton">
    <i class="gg-math-plus"></i>
  </div>
</template>

<script>

export default {
  name: 'AddButton',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.addbutton {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #fff;
}

.addbutton:hover {
  background: #D58C51;
}

.gg-math-plus,
.gg-math-plus::after {
  display: block;
  box-sizing: border-box;
  background: currentColor;
  border-radius: 10px
}
.gg-math-plus {
  margin-top: -2px;
  position: relative;
  transform: scale(var(--ggs,1));
  width: 12px;
  height: 2px
}
.gg-math-plus::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 12px;
  top: -5px;
  left: 5px
}
</style>
