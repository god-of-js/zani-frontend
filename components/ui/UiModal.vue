<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean;
}>()

const emit = defineEmits<{(e: 'update:modelValue', value: boolean): void }>()
</script>

<template>
  <div class="ui-modal">
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="props.modelValue"
          class="overlay"
          @click="emit('update:modelValue', false)"
        />
      </Transition>
    </Teleport>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="props.modelValue" class="card">
          <slot />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(50, 50, 50, 0.8);
  z-index: 3;
  margin: auto;
}

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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
