<script lang="ts" setup>
</script>

<template>
  <div>
    <!-- Add Global navbar component -->
    <LayoutsAppNavbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <LayoutsAppSection />
    <LayoutsAppFooter />
    <!-- Add global footer component -->
  </div>
</template>
