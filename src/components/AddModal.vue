<template>
    <div>
      <div id="addContent" class="modal-content">
        <h4>Add</h4>
        <div class="row">
          <div class="input-field col s6">
            <input v-model="user.first_name"id="first_name" type="text" class="validate">
            <label for="user.first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input v-model="user.last_name" id="last_name" type="text" class="validate">
            <label for="user.last_name">Last Name</label>
          </div>
          <div class="input-field col s12">
            <input v-model="user.email" id="email" type="text" class="validate">
            <label for="user.email">Email</label>
          </div>
          <div class="input-field col s12">
            <div class="file-field input-field">
              <div class="btn">
                <span>File</span>
                <input type="file">
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <a @click="addUser" class="modal-close waves-effect waves-green btn-flat">Submit</a>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "",
        first_name: "",
        last_name: "",
        email: ""
      },
    }
  },
  methods: {
    addUser() {
      this.$http.post('https://reqres.in/api/user', this.user)
        .then(response => {
          this.$store.commit('incrementCreated');
          alert(JSON.stringify(response.body));
        });
    }
  }
};
</script>
