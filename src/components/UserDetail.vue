<template>
 <div class="container">
  <div class="row">
    <div class="col s12 m12">
      <h2 class="header">{{ full_name }}</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img :src="user.avatar">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <blockquote>Email: {{ user.email }}</blockquote>
          </div>
          <div class="card-action">
            <router-link to="/">
              <a>Home</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      full_name: "",
      user: [],
    }
  },
  created() {
    this.$http.get('https://reqres.in/api/users/' + this.id)
      .then(response => {
        this.user = response.body.data;
      });
  },
  watch: {
    user: function() {
      this.full_name = this.user.first_name + " " + this.user.last_name;
      
    },
  },
}
</script>
