<template>
    <q-page padding>
        <q-card class="q-mb-md" v-for="caregiver in caregivers" :key="caregiver.id">
            <q-item>
                <q-item-side icon="person" />
                <q-item-main>
                    <q-item-tile label>{{caregiver.name}}</q-item-tile>
                    <q-card-separator/>
                    <p class="text-faded q-mt-md">{{caregiver.email}}</p>
                    <p class="text-faded q-mt-md">{{caregiver.gender}}</p>
                    <p class="text-faded q-mt-md">{{caregiver.address}}</p>
                    <div class="row justify-end">
                        <q-btn @click="selectUser(caregiver.id)">ver usuário</q-btn>
                    </div>
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
      caregivers: []
    }
  },
  methods: {
    loadUsers () {
      this.$axios.get('https://helpup-api-desafio.herokuapp.com/caregivers')
        .then((response) => {
          this.caregivers = response.data
        })
    },
    selectUser (id) {
      localStorage.caregiverId = id
      this.$router.push('/caregivers/profile')
    }
  },
  mounted () {
    this.loadUsers()
  }
}
</script>

<style>
</style>
