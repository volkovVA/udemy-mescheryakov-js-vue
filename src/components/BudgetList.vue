<template>
  <div class="budget-list-wrap">
    <v-layout row wrap pt-10>
      <v-flex xs-12>
        <v-card
          class="mx-auto"
          max-width="600"
          tile
        >
          <v-list disabled>
            <v-subheader>REPORTS</v-subheader>
            <v-list-item-group v-model="list" color="primary">
              <template v-if="!isEmpty">
                <v-list-item
                v-for="(item, i) in list"
                :key="i"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.comment"></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-list-item-subtitle class="text-center" v-text="item.value"></v-list-item-subtitle>
                  </v-list-item-content>
                  <div class="my-2">
                    <v-btn large color="error">Delete</v-btn>
                  </div>
              </v-list-item>
              </template>
              <v-alert type="info" v-else>
                Empty List
              </v-alert>
            </v-list-item-group>
          </v-list>
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
  }
}
</script>

<style scoped>

</style>
