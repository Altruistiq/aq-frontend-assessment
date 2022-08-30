import { createStore } from 'vuex'

const API_CREDENTIALS = 'Basic YW55LXVzZXItbmFtZTpmSDIxTjIyVTVjRW5DR2J0UTBURmlBYXJmc2RjbjdhNVM4ODg1R0VnZThiRkQ4QzBrZ3I='

const store = createStore({
  state () {
    return {
      name: 'Altruistiq'
    }
  },

  actions: {
    // get all countries
    async getCountries({}) {
      const resp = await fetch('https://api.footprintnetwork.org/v1/countries', {
        method: 'GET',
        headers: {
          Authorization: API_CREDENTIALS,
        },
      })

      const json = await resp.json()

      return json
    },  
    
    // get a single country by countryCode
    async getCountry({}, { countryCode }) {
      const resp = await fetch(`https://api.footprintnetwork.org/v1/data/${countryCode}/all/EFCpc`, {
        method: 'GET',
        headers: {
          Authorization: API_CREDENTIALS,
        },
      })

      const json = await resp.json()

      return json    
    }    
  },

  mutations: {

  }
})

export default store