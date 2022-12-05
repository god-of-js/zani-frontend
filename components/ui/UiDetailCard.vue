<script setup lang="ts">
interface Props {
  id: string;
  image: string;
  title: string;
  price?: string;
}
const props = defineProps<Props>()

const emit = defineEmits<{(e: 'delete', id: string): void;(e: 'clicked'): void;}>()
</script>

<template>
  <div class="detail-card" @click="emit('clicked')">
    <div class="image">
      <img :src="props.image" alt="product image" height="290">
    </div>
    <div>
      <div class="detail-title">
        {{ title }}
      </div>
    </div>
    <button v-if="false" @click="emit('delete', props.id)">
      Delete Item
    </button>
  </div>
</template>

<style lang="scss" scoped>
.detail-card {
  width: 255px;
  padding-bottom: 24px;
  img {
    width: 100%;
  }
  .detail-title {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding: 12px 0px;
  }
}
</style>
