<script lang="ts" setup>
const props = defineProps<{
  modelValue: File[];
}>()

const emit = defineEmits<{(e: 'update:model-value', value: unknown[]) }>()
const events = ['dragenter', 'dragover', 'dragleave', 'drop']

const files = computed({
  get () {
    return props.modelValue
  },
  set (newVal: File[]) {
    emit('update:model-value', newVal)
  }
})

onMounted(() => {
  events.forEach((eventName) => {
    document.body.addEventListener(eventName, preventDefaults)
  })
})

onUnmounted(() => {
  events.forEach((eventName) => {
    document.body.removeEventListener(eventName, preventDefaults)
  })
})

function preventDefaults (e) {
  e.preventDefault()
}

function onDrop (e) {
  files.value.push(...e.dataTransfer.files)
}

function handleFileChange () {
  const fileInput = document.getElementById('input') as HTMLInputElement | null
  const selectedFile = fileInput.files[0]
  files.value.push(selectedFile)
}

function pickImage () {
  document.getElementById('input').click()
}

function getFile (item) {
  return item.name || ''
}
function removeFile (index: number) {
  console.log(index)
  console.log(files.value[index])
//   files.value.splice(index, 1)
}
</script>

<template>
  <UiField>
    <div class="image-picker" @drop.prevent="onDrop" @click="pickImage">
      <slot>
        <div class="">
          Select or drag and drop images
        </div>
      </slot>
      <input id="input" type="file" @change="handleFileChange">
    </div>
    <div class="files">
      <div v-for="(file, index) in files" :key="index" class="file">
        <span>{{ getFile(file) }} {{ index }}</span>
        <button @click.prevent="removeFile(index)">
          <img src="~/assets/icons/IconClose.svg">
        </button>
      </div>
    </div>
  </UiField>
</template>

<style lang="scss" scoped>
@import '~/assets/css/colors.scss';
.image-picker {
  border: 1px dashed $primary-100;
  padding: 20px;
  margin-bottom: 12px;
  text-align: center;
  cursor: pointer;
}

input {
  display: none;
}

.file {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  button {
    background: transparent;
    cursor: pointer;
    border: transparent;
    outline: none;
  }
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
