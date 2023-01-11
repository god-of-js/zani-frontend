<script lang="ts" setup></script>

<template>
  <div>
    <LayoutsAppNavbar />
    <NuxtLayout>
      <div class="page-content">
        <NuxtPage />
      </div>
    </NuxtLayout>
    <LayoutsSignUpToMailingList />
    <LayoutsAppFooter />
  </div>
</template>

<style lang="scss" scoped>
.page-content {
  padding: 12px 5%;
}
</style>
