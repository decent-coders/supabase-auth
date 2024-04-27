<template lang="">
  <div class="modal" @click="$emit('modalSkip')">
    <div
      class="modalBody min-w-[50px] min-h-[50px]"
      @click.stop="$emit('asdfasf')"
    >
      <slot />
    </div>
  </div>
</template>
<script>
  export default {
    emits: ["modalSkip", "asdfasf"],
    computed: {
      handleModal() {
        this.showModal = false;
      },
    },
  };
</script>
<style scoped>
  .modalBody {
    border-radius: 1rem;
    background-color: #fff;
  }
  .modal {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    background-color: rgb(151 142 142 / 50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    z-index: 999;
    top: 0;
  }
</style>
