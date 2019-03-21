<template>
    <q-page padding>
        <q-card class="q-mb-md">
            <q-item>
                <q-item-side icon="person" />
                <q-item-main>
                    <q-item-tile label>{{caregiver.name}}</q-item-tile>
                    <q-card-separator />
                    <p class="text-faded q-mt-md">{{caregiver.email}}</p>
                    <p class="text-faded q-mt-md">{{caregiver.gender}}</p>
                    <p class="text-faded q-mt-md">{{caregiver.address}}</p>
                    <p class="text-faded q-mt-md">{{caregiver.location}}</p>
                    <p class="text-faded q-mt-md">{{caregiver.isGraduate}}</p>
                    <p class="text-faded q-mt-md">{{caregiver.hasCourse}}</p>
                    <p class="text-faded q-mt-md">{{caregiver.createdAt}}</p>
                </q-item-main>
            </q-item>
        </q-card>
    </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      caregiver: {}
    }
  },
  methods: {
    loadCaregiver () {
      console.log(localStorage.caregiverId)
      let url = 'https://helpup-api-desafio.herokuapp.com/caregivers/' +
                localStorage.caregiverId
      this.$axios.get(url)
        .then((response) => {
          this.caregiver = response.data
        })
    }
  },
  mounted () {
    this.loadCaregiver()
  }
}
</script>

<style>

</style>
