<template>
  <div>
    <nav class="navbar" style="background-color: #4b8067">
      <div class="mx-auto w-50 py-2">
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-primary" type="">Search</button>
        </form>
      </div>

      <div class="btn-group dropstart">
        <v-avatar
          color="danger"
          class="me-3 text-light dropdown-toggle"
          style="cursor: pointer"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Test
        </v-avatar>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li class="text-center" style="cursor: pointer" @click="handleLogout">
            Log out
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
  export default {
    methods: {
      async handleLogout() {
        const supabase = useSupabaseClient();
        let { error } = await supabase.auth.signOut();
        navigateTo("/");
      },
    },
  };
</script>
<style scoped>
  .dropstart .dropdown-toggle::before {
    display: none;
  }
</style>
