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
  width: 85%;
  margin: auto;
  padding: 12px 0;
}
</style>
