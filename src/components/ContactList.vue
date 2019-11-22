<template>
<div class="container">
  <div class="row">
    <div class="col s12 m4" v-for="user in usersList">
      <div class="card hoverable">
        <div class="card-image">
          <img :src="user.avatar">
        </div>
        <div class="card-content">
          <span class="truncate card-title">{{user.first_name}} {{user.last_name}}</span>
        </div>
        <div class="card-action">
          <router-link :to="'/user/' + user.id">
            <a>Details</a>
          </router-link>
          <a @click="openEditModal(user)">Edit</a>
        </div>
      </div>
    </div>
  </div>
    <!-- EDIT Modal Structure -->
  <div id="editModal" class="modal">
    <EditModal v-bind:user="user"></EditModal>
  </div>
    <!-- ADD Modal Structure -->
  <div id="addModal" class="modal">
    <AddModal></AddModal>
  </div>

  <ul id="pagination" class="pagination">
    <li @click="firstPage" class="waves-effect"><a href="" onclick="return false;"><i class="material-icons">chevron_left</i></a></li>
    <li @click="changePage(i)" v-for="i in total_pages"><a href="" onclick="return false;">{{ i }}</a></li>
    <li @click="lastPage()" class="waves-effect"><a onclick="return false;"><i class="material-icons">chevron_right</i></a></li>
  </ul>

  <a class="btn-floating btn-large waves-effect waves-light red" 
    :style="addButtonStyle"
    @click="openAddModal">
    <i class="material-icons">add</i>
  </a>
</div>
</template>

<script>

import EditModal from "@/components/EditModal.vue";
import AddModal from "@/components/AddModal.vue";
export default {
  name: 'contact-list',
  components: {
    EditModal,
    AddModal
  },
  data(){
    return {
      usersList: [],
      user: "",
      total_pages: 0,
      addButtonStyle: {
        position: 'fixed',
        bottom: '45px',
        right: '24px'
      }
    }
  },
  created(){
    this.$http.get('https://reqres.in/api/users?page=1')
      .then(response => {
        this.usersList = response.body.data;
        this.total_pages = response.body.total_pages;
      });
  },
  methods: {
    openEditModal(user) {
      this.user = user;
      var modal = this.$el.querySelector('#editModal');
      var m = M.Modal.init(modal);
      m.open();
    },
    openAddModal() {
      var modal = this.$el.querySelector('#addModal');
      var m = M.Modal.init(modal);
      m.open();
    },
    changePage(page) {
      this.$http.get('https://reqres.in/api/users?page=' + page)
        .then(response => {
          this.usersList = response.body.data;
        });
    },
    firstPage() {
      this.$http.get('https://reqres.in/api/users?page=1')
        .then(response => {
          this.usersList = response.body.data;
        });
    },
    lastPage() {
      this.$http.get('https://reqres.in/api/users?page=' + this.total_pages)
        .then(response => {
          this.usersList = response.body.data;
        });
    }
  },

}
</script>
