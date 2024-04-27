<template lang="">
  <div>
    <nuxt-link to="/dashboard/Overview"
      ><img class="w-100" src="assets/logo4.png" alt=""
    /></nuxt-link>

    <div class="list-group">
      <Lazynuxt-link
        to="/dashboard/Overview"
        class="list-group-item list-group-item-action"
        exact-active-class="active"
      >
        Overview
      </Lazynuxt-link>
      <Lazynuxt-link
        to="/dashboard/Drugs"
        class="list-group-item list-group-item-action"
        exact-active-class="active"
      >
        Drugs
      </Lazynuxt-link>
      <Lazynuxt-link
        to="/dashboard/Vendors"
        class="list-group-item list-group-item-action"
        exact-active-class="active"
      >
        Vendors
      </Lazynuxt-link>
      <Lazynuxt-link
        to="/dashboard/Selling-History"
        class="list-group-item list-group-item-action"
        exact-active-class="active"
      >
        Selling-History
      </Lazynuxt-link>
      <Lazynuxt-link
        to="/dashboard/Settings"
        class="list-group-item list-group-item-action"
        exact-active-class="active"
      >
        Settings
      </Lazynuxt-link>
    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style scoped>
  .list-group-item {
    color: #f5eaea !important;
    font-weight: 500 !important;
    background-color: #4b8067 !important;
    border: none;
    border-bottom: var(--bs-list-group-border-width) solid #85b588 !important;
  }

  .active {
    color: #ffffff !important;
    background-color: #516a83 !important;
    border-left: 5px solid black !important;
    transition: all ease;
  }

  .list-group-item-action:hover {
    color: #ffffff !important;
    background-color: #426f5a !important;
    transition: all ease-in-out;
  }
  .list-group-item:first-child {
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;
  }
  .list-group-item:last-child {
    border-bottom-right-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
  }
</style>
