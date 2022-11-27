<script lang="ts" setup>
</script>

<template>
  <div class="ui-modal">
    <div class="card">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 25rem;
  min-height: 15px;
  background: #fff;
  transition: all 0.5s ease;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  padding: 24px;
  z-index: 3;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
</style>
