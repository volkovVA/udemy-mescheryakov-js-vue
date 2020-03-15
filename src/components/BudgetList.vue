<template>
  <div class="budget-list-wrap">
    <v-layout row wrap pt-10>
      <v-flex xs-12>
        <v-card
          class="mx-auto pb-3"
          max-width="600"
          tile
        >
          <v-toolbar
            color="indigo"
            dark
            class="mb-3"
          >
            <v-toolbar-title>Budget List</v-toolbar-title>
          </v-toolbar>
          <app-budget-item :list="list" @deleteItem="onDeleteItem"></app-budget-item>

        </v-card>
      </v-flex>
    </v-layout>
  </div>
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
    header: 'Budget List'
  }),
  methods: {
    onDeleteItem (id) {
      this.$delete(this.list, id)
    }
  }
}
</script>

<style scoped>

</style>
