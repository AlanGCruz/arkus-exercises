<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right">
          <li><a href="badges.html">created users <span class="new badge" data-badge-caption="">{{ created }}</span></a></li>
          <li><a href="badges.html">updated users <span class="new badge" data-badge-caption="">{{ edited }}</span></a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>

export default {
  computed: {
    created() {
      return this.$store.getters.created;
    },
    edited() {
      return this.$store.getters.edited;
    }
  }
}
</script>
