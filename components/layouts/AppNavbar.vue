<template>
  <nav>
    <div class="navbar-links">
      <ul>
        <li>
          <router-link to="/">
            shop
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            bundles
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            brand
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            save items
          </router-link>
        </li>
      </ul>
    </div>
    <img src="@/assets/images/brand-logo.svg" alt="brand-logo">
    <div class="navbar-links">
      <ul>
        <li>
          <router-link to="/">
            account
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            search
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            cart
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
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
