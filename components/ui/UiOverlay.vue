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
        <div>
          <slot v-if="props.modelValue" />
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
