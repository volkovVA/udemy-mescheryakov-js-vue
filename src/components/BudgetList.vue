<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-card
        class="mx-auto"
        max-width="600"
        width="600"
      >
        <v-toolbar
          color="green accent-3"
          class="mb-5"
        >
          <v-toolbar-title>Budget List</v-toolbar-title>
        </v-toolbar>
        <!-- 6. Добавить кнопки сортировки над BudgetList которые будут управлять сортировкой списка,
        // показать только расходы, показать только доходы, показать все. -->
        <v-layout class="justify-center">
          <v-btn small class="mr-2" color="green accent-1" @click="showAll">all</v-btn>
          <v-btn small class="mr-2" color="green accent-1" @click="sortList('INCOME')">income</v-btn>
          <v-btn small color="green accent-1" @click="sortList('OUTCOME')">outcome</v-btn>
        </v-layout>
        <template v-if="!isEmpty">
          <app-budget-item @deleteItem="onDeleteItem" v-for="(item, i) in filterList" :key="i" :item="item"></app-budget-item>
        </template>
        <v-alert type="info" color="light-blue accent-3" v-else>
          Empty List
        </v-alert>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import BudgetListItem from './BudgetListItem'

export default {
  components: {
    appBudgetItem: BudgetListItem
  },
  name: 'BudgetList',
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    filterList: null,
    sortName: 'INCOME'
  }),
  computed: {
    isEmpty () {
      return !Object.keys(this.list).length
    },
    sort () {
      const result = {}
      for (const item in this.list) {
        const sort = this.list[item]
        if (this.list[item].type === this.sortName) {
          result[item] = sort
        }
      }
      return result
    }
  },
  created () {
    this.filterList = this.list
  },
  methods: {
    onDeleteItem (id) {
      this.$delete(this.list, id)
    },
    sortList (sortName) {
      this.sortName = sortName
      this.filterList = this.sort
    },
    showAll () {
      // eslint-disable-next-line no-return-assign
      return this.filterList = this.list
    }
  }
}
</script>

<style scoped>

</style>
