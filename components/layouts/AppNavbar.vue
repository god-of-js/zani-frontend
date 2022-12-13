<script lang="ts" setup>
const leftNavLinks = [
  {
    name: 'shop',
    path: '/'
  },
  {
    name: 'bundles',
    path: '/'
  },
  {
    name: ' brand',
    path: '/'
  },
  {
    name: ' save items',
    path: '/'
  }
]
const rightNavLinks = [
  {
    name: 'account',
    path: '/'
  },
  {
    name: 'search',
    path: '/'
  },
  {
    name: 'cart',
    path: '/'
  }
]
</script>

<template>
  <nav>
    <div class="navbar-links">
      <ul>
        <li v-for="(item, index) in leftNavLinks" :key="index">
          <nuxt-link :to="item.path">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <img src="@/assets/images/brand-logo.svg" alt="brand-logo">
    <div class="navbar-links">
      <ul>
        <li v-for="(item, index) in rightNavLinks" :key="index">
          <nuxt-link :to="item.path">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 93px;
  margin-inline: auto;
  max-width: 1440px;
  background: rgba(248, 248, 248, 0.6);
}
.navbar-links ul {
  list-style: none;
  display: flex;
  padding: 30px;
  gap: 15px;
}

.navbar-links a {
  text-decoration: none;
  color: #01161e;
}

</style>
