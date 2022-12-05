<script lang="ts" setup>
const onlineStoreLinks = [
  {
    name: 'sureshot',
    path: '/'
  },
  {
    name: 'flintlock tees',
    path: '/'
  },
  {
    name: 'sustainable products',
    path: '/'
  },
  {
    name: 'zani pants',
    path: '/'
  },
  {
    name: 'zani tee shirts',
    path: '/'
  },
  {
    name: 'zani jackets',
    path: '/'
  },
  {
    name: 'zani shorts',
    path: '/'
  },
  {
    name: 'zani sale',
    path: '/'
  },
  {
    name: 'chinos',
    path: '/'
  },
  {
    name: 'denim',
    path: '/'
  },
  {
    name: 'joggers',
    path: '/'
  },
  {
    name: 'cargo pants',
    path: '/'
  },
  {
    name: 'hoodies',
    path: '/'
  }
]
const moreInfoLinks = [
  {
    name: 'about',
    path: '/'
  },
  {
    name: 'contact us',
    path: '/'
  },
  {
    name: 'help & frequently asked question',
    path: '/'
  },
  {
    name: 'returns policy',
    path: '/'
  },
  {
    name: 'submit a return request',
    path: '/'
  },
  {
    name: 'shipping info',
    path: '/'
  },
  {
    name: 'technical & privacy',
    path: '/'
  },
  {
    name: 'sales & distribution',
    path: '/'
  },
  {
    name: 'sustainability our goal',
    path: '/'
  },
  {
    name: 'site reviews',
    path: '/'
  },
  {
    name: 'promotions',
    path: '/'
  },
  {
    name: 'zani loyalty',
    path: '/'
  },
  {
    name: 'refer a friend',
    path: '/'
  },
  {
    name: 'ambassador program',
    path: '/'
  },
  {
    name: 'those who wear',
    path: '/'
  }
]
</script>
<template>
  <footer>
    <div class="our-story">
      <h2>our story</h2>
      <p>
        Our origin story is more of an origin statement. We wanted to design
        what we wanted to wear – so we did.
      </p>
      <br>
      <p>
        Since then, that philosophy has become more about the guy we design for
        and the impact he is looking to make. Our signature pieces, like the
        Sureshot Jogger and the Flintlock Tee, have come to stand for ingenuity,
        creativity and a constant drive to move forward and beyond expectations.
      </p>
      <br>
      <p>
        We keep our impact on the environment low and our standards of
        craftsmanship and customer service high.
      </p>
      <br>
      <p>
        We’re for good times and even greater design. And we create what you
        want to wear because we wear it too.
      </p>
      <br>
      <p>We are Zani</p>
      <div class="social-icons">
        <img src="@/assets/icons/twitter.svg" alt="twitter-logo">
        <img src="@/assets/icons/facebook.svg" alt="facebook-logo">
        <img src="@/assets/icons/youtube.svg" alt="youtube-logo">
        <img src="@/assets/icons/instagram.svg" alt="instagram-logo">
        <img src="@/assets/icons/spotify.svg" alt="spotify-logo">
        <img src="@/assets/icons/pinterest.svg" alt="pinterest-logo">
        <img src="@/assets/icons/tiktok.svg" alt="tiktok-logo">
      </div>
    </div>
    <div class="online-store">
      <h2>online store</h2>
      <ul>
        <li v-for="(item, index) in onlineStoreLinks" :key="index">
          <nuxt-link :to="item.path">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="more-info">
      <h2>more info</h2>
      <ul>
        <li v-for="(item, index) in moreInfoLinks" :key="index">
          <nuxt-link :to="item.path">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="stay-up-to-date">
      <h2>stay up to date</h2>
      <p>
        Take 10% off your order when you sign up to our newsletter plus be the
        first to hear about new drops plus get VIP access to exclusive releases,
        re-stocks, sales &amp; more.
      </p>
      <div class="newsletter-signup">
        <UiInput placeholder="enter your email" class="input-email" />
        <UiButton class="right-arrow-btn">
          <img src="@/assets/icons/rightarrow.svg" alt="right-arrow">
        </UiButton>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-inline: auto;
  max-width: 1441px;
  width: 95%;
  gap: 40px;
  margin-block: 30px;
}
h2 {
  padding-bottom: 20px;
}
.our-story {
  width: 400px;
  height: 300px;
  line-height: 24px;
  font-size: 14px;
}
ul {
  list-style: none;
  line-height: 24px;
  font-size: 14px;
}
.stay-up-to-date {
  width: 340px;
  line-height: 20px;
  font-size: 14px;
}
.newsletter-signup {
  display: flex;
  margin-block: 10px;
}
.input-email {
  width: 100%;
}
.right-arrow-btn {
  width: 20%;
}
.social-icons {
  display: flex;
  gap: 20px;
  margin-top: 50px;
  cursor: pointer;
}
</style>
