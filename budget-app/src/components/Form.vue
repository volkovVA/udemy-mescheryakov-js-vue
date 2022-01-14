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
          class="mb-3"
        >
          <v-toolbar-title>Enter data</v-toolbar-title>
        </v-toolbar>
        <v-container class="pb-5">
          <v-form ref="addItemForm" validation :model="formData" class="text-center">
            <v-select
              outlined
              :items="items"
              label="Type"
              v-model="formData.type"
              placeholder="Choose type..."
              required
            ></v-select>
            <v-text-field
              outlined
              label="Comments"
              name="comments"
              type="comments"
              :rules="commentRules"
              v-model="formData.comment"
              required
            />
            <v-text-field
              outlined
              label="Value"
              name="value"
              type="value"
              :rules="valueRules"
              v-model.number="formData.value"
              required
            />
            <v-btn
              @click.prevent="onSubmit"
              color="light-blue accent-3"
            >
              submit
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Form',
  data: () => {
    return {
      formData: {
        type: 'INCOME',
        comment: '',
        value: 0
      },
      items: ['INCOME', 'OUTCOME'],
      commentRules: [
        v => !!v || 'Please input comment'
      ],
      // 7.Сделать кастомный валидатор для поля value в форме, пользователь не должен
      // иметь возможности отправить форму со значением ноль в этом поле.
      valueRules: [
        v => v !== 0 || 'Value must be greater than 0',
        v => typeof v === 'number' || 'Value must be a number'
      ]
    }
  },
  methods: {
    ...mapActions('listStore', ['addListItem']),
    onSubmit () {
      if (this.$refs.addItemForm.validate()) {
        const newObj = {
          ...this.formData,
          id: String(Math.random())
        }
        this.$refs.addItemForm.reset()
        this.addListItem(newObj)
      }
    },
    plusMinus (type) {
      return type === 'INCOME' ? 1 : -1
    }
  }
}
</script>

<style scoped>

</style>
