<template>
    <q-layout view="lHh Lpr lFf">
        <q-layout-header>
            <q-toolbar color="primary" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'">
                <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
                    <q-icon name="menu" />
                </q-btn>

                <q-toolbar-title>
                    Quasar App
                    <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
                </q-toolbar-title>
            </q-toolbar>
        </q-layout-header>

        <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
            <q-list no-border link inset-delimiter>
                <q-list-header>Essential Links</q-list-header>
                <q-item to="/">
                    <q-item-side icon="school" />
                    <q-item-main label="Home" sublabel="quasar-framework.org" />
                </q-item>
                <q-item to="/caregivers">
                    <q-item-side icon="rss feed" />
                    <q-item-main label="Caregivers" sublabel="github.com/quasarframework" />
                </q-item>
                <q-item to="/contacts">
                    <q-item-side icon="record_voice_over" />
                    <q-item-main label="Contacts" sublabel="forum.quasar-framework.org" />
                </q-item>
                <q-item to="/calls">
                    <q-item-side icon="rss feed" />
                    <q-item-main label="Calls" sublabel="@quasarframework" />
                </q-item>
            </q-list>
        </q-layout-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>

</style>
