<template>
  <div class="total-value" :class="classObject">Balance: {{ total }}</div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classObject: function () {
      return {
        'black--text': this.total === 0,
        'green--text': this.total > 0,
        'red--text': this.total < 0
      }
    }
  }
}
</script>

<style scoped>
  .total-value {
    font-size: 26px;
    text-transform: uppercase;
    padding: 20px;
    text-align: center;
  }
</style>
