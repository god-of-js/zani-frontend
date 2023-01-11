<script lang="ts" setup>
interface Props {
  img: string;
  title: string;
  price?: number;
}
const props = defineProps<Props>()

const emit = defineEmits<{(e: 'view'): void;}>()
</script>

<template>
  <div class="product-detail-card" @click="emit('view')">
    <div
      class="image-container"
      :style="`background-image: url(${props.img})`"
    />
    <div class="product-name">
      {{ props.title }}
    </div>
    <div v-if="props.price" class="price">
      {{ props.price }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-container {
  width: 255px;
  height: 290px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: center;
  background-position: center;
}
.product-name {
  padding: 12px 0;
}
.product-detail-card {
    cursor: pointer;
}
</style>
