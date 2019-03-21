<template>
    <q-page class="flex flex-center">
      <div class="justify-center ps-body">
        <p class="ps-body caption">Bem Vindo!</p>
        <br>
        <q-alert class="ps-body" icon="map" color="orange">{{ homeInformations.status }}</q-alert>
      </div>
    </q-page>
</template>

<style>
@media (min-width: 320px)
{
  .ps-body
   {
    padding: 5px;
   }
}
</style>

<script>
export default {
  // name: 'PageIndex'
  data () {
    return {
      homeInformations: []
    }
  },
  methods: {
    loadInformations () {
      this.$axios.get('https://helpup-api-desafio.herokuapp.com')
        .then(resp => {
          this.homeInformations = resp.data
          console.log(resp.data)
        })
    }
  },
  mounted () {
    this.loadInformations()
  }
}
</script>
