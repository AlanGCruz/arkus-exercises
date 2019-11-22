<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ContactList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from '@/components/ContactList.vue'

export default {
  name: 'home',
  components: {
    ContactList
  }
}
</script>
