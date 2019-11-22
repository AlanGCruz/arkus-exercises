<template>
    <div>
      <div class="modal-content">
        <h4>Edit</h4>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="user.first_name" v-model="user.first_name"id="first_name" type="text" class="validate">
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input placeholder="user.last_name" v-model="user.last_name" id="last_name" type="text" class="validate">
            <label for="last_name">Last Name</label>
          </div>
          <div class="input-field col s12">
            <input placeholder="user.email" v-model="user.email" id="email" type="text" class="validate">
            <label for="email">Email</label>
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
        <a @click="editUser" class="modal-close waves-effect waves-green btn-flat">Submit</a>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    user: {
      id: String,
      first_name: String,
      last_name: String,
      email: String
    }
  },
  methods: {
    editUser() {
      this.$http.put('https://reqres.in/api/users/' + this.user.id, this.user)
        .then(response => {
          this.$store.commit('incrementEdited')
          alert(JSON.stringify(response.body));
        });
    }
  }
};
</script>
