<template>
  <div>
    <div id="toolbar" class="toolbar">
      <router-link :to="{ name: 'home' }">
        <img class="icon" :src="logoUrl">
        <h1>vuebnb</h1>
      </router-link>
      <ul class="links">
        <li v-if="$store.state.auth">
          <router-link :to="{ name: 'saved' }">Saved</router-link>
        </li>
        <li v-if="$store.state.auth">
          <a @click="logout">Log Out</a>
          <form
            style="display: none"
            action="/logout"
            method="POST"
            id="logout"
          >
            <input type="hidden" name="_token" :value="csrf_token"/>
          </form>
        </li>
        <li v-else>
          <router-link :to="{ name: 'login' }">Log In</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <custom-footer />
  </div>
</template>
<script>
  import CustomFooter from './CustomFooter.vue';

  export default {
    name: 'app',
    components: {
      CustomFooter
    },
    data() {
      return {
        csrf_token: window.csrf_token
      }
    },
    methods: {
      logout() {
        document.getElementById('logout').submit();
      }
    },
    computed: {
      logoUrl() {
        return `${window.cdn_url || ''}images/logo.png`;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .toolbar {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 0 24px 0 0;
      margin: 0;
      li {
        padding: 10px 10px 0 10px;
        a {
          text-decoration: none;
          line-height: 1;
          color: inherit;
          font-size: 13px;
          padding-bottom: 8px;
          letter-spacing: 0.5px;
          cursor: pointer;
          &:hover {
            border-bottom: 2px solid #484848;
            padding-bottom: 6px;
          }
        }
      }
      @media (max-width: 373px) {
        padding-right: 12px;
      }
    }
  }
  .icon {
    height: 34px;
    padding: 16px 12px 16px 24px;
    display: inline-block;
  }
  h1 {
    color: #4fc08d;
    display: inline-block;
    font-size: 28px;
    margin: 0;
  }
</style>
