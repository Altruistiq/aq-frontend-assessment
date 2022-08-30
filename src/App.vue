<template>
  <div>
    <h1>Welcome to Altruistiq!</h1>
  </div>
</template>

<script>
export default {
  name: 'App',

  async created() {
    // get all countries
    const countries = await this.$store.dispatch('getCountries')
    console.log(countries)

    // get a single country by id
    const UK = await this.$store.dispatch('getCountry', 229)
    console.log(UK)
  },

  methods: {
  }
}
</script>

<style scoped>
</style>
