<template>
  <v-card
    class="mx-auto pl-5 pr-5 pb-5"
    max-width="600"
    width="600"
  >
    <v-card-title>Form</v-card-title>
    <v-form ref="addItemForm" validation :model="formData" class="text-center">
      <v-select
          :items="items"
          label="Type"
          v-model="formData.type"
          placeholder="Choose type..."
          required
        ></v-select>
      <v-text-field
        label="Comments"
        name="comments"
        type="comments"
        :rules="commentRules"
        v-model="formData.comment"
        required
      />
      <v-text-field
        label="Value"
        name="value"
        type="value"
        :rules="valueRules"
        v-model.number="formData.value"
        required
      />
      <v-btn
        @click="onSubmit"
        color="primary"
      >
        submit
      </v-btn>
      </v-form>
  </v-card>
</template>

<script>
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
      valueRules: [
        v => !!v || 'Please input value',
        v => typeof v === 'number' || 'Value must be a number'
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.addItemForm.validate()) {
        this.$emit('submitForm', { ...this.formData })
        this.$refs.addItemForm.reset()
      }
    }
  }
}
</script>

<style scoped>

</style>
