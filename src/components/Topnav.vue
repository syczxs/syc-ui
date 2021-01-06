<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-hu1"></use>
      </svg></router-link>
      
    </div>

    <ul class="menu">
      <li>
        <router-link to="/" style="color: #409eff">首页</router-link>
      </li>
      <li><router-link to="/doc/intro">介绍</router-link></li>
      <li><router-link to="/doc/install">安装</router-link></li>
    </ul>
    <span class="toggleAside" @click="toggleAside"> 
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  box-sizing: border-box;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 10;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  // background-color: white;
  padding: 0 200px;
    > .logo {
      max-width: 6em;
      margin-right: auto;
      svg {
        width: 32px;
        height: 32px;
      }
    }

    > .menu {
      height: 100%;
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      > li {
        height: 100%;

        > a {
          height: 100%;
          display: flex;
          align-items: center;
          margin-left: 20px;
          color: #409eff;
        }
        .router-link-active {
          border-bottom: 1px solid #409eff;
        }
      }
    }
    > .toggleAside {
      display: none;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      
      
    }
  }
  @media (max-width: 500px) {
    .topnav {
     
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .toggleAside {
        display: inline-block;
      }
    }
  
}
</style>