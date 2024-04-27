<template lang="">
  <div class="abc">
    <div
      class="notification p-2 ps-2 pb-2 m-3"
      :class="notificationState"
      :key="index"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      notificationState: String,
    },
    data() {
      return {
        index: 0,
      };
    },
  };
</script>
<style>
  .success {
    border: 1px solid #139c7675;
    background: #92e1cb75;
    color: green;
  }
  .danger {
    border: 1px solid #741d3875;
    background: #f7a0a075;
    color: red;
  }
  .notification {
    min-width: 240px;
    max-width: 300px;
    border-radius: 0.4rem;
    min-width: 240px;
  }
</style>
