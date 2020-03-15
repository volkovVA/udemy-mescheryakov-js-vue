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
            <template v-if="!isEmpty">
              <v-list-item
              v-for="(item, i) in list"
              :key="i"
              class="mb-3"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.comment"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-center" v-text="item.value"></v-list-item-subtitle>
                </v-list-item-content>
                <v-btn large color="error" @click="deleteItem(item.id)">Delete</v-btn>
              </v-list-item>
            </template>
            <v-alert type="info" v-else>
              Empty List
            </v-alert>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
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
  computed: {
    isEmpty () {
      return !Object.keys(this.list).length
    }
  },
  methods: {
    deleteItem (id) {
      this.$emit('deleteItem', id)
    }
  }
}
</script>

<style scoped>

</style>
