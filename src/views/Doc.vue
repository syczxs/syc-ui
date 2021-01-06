<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside :class="asideVisible ? '' : 'left-translate'">
        <div class="aside-inner">
          <h4>文档</h4>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>

            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-start">开始使用</router-link>
            </li>
          </ol>
          <h4 >组件列表</h4>
          <ol class="component">
            <li>
              <router-link to="/doc/switch">Swich组件 </router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button组件 </router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog组件 </router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs组件 </router-link>
            </li>
          </ol>
        </div>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, ref, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
import Button from "../lib/Button.vue";
export default {
  components: {
    Topnav,
    Button,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const width = ref(0);
    return { asideVisible, width };
  },
};
</script>

<style lang="scss" scoped>
.router-link-active {
  color: #409eff;
}
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    width: 100%;
    flex-grow: 1;
    padding-top: 60px;
    position: relative;
    margin-top: 0px;

    @media (max-width: 500px) {
      width: 100%;
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  height: calc(100% - 60px);
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 20px 20px 32px 64px;
  }
  > main {
    padding-left: 350px;
    @media (max-width: 500px) {
      padding-left: 50px;
    }
  }
  > main::-webkit-scrollbar {
    width: 6px;
    /*height: 4px;*/
  }
  > main::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
  }
  > main::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }
}
aside {
  z-index: 5;
  width: 260px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  
  transform: translateX(0);
  transition: all 250ms;
  background-color: white;
  @media (max-width: 500px) {
    position: fixed;
  }
  > .aside-inner {
    margin-top: 60px;
    border-right: 1px solid #dcdfe6;
    padding-top: 16px;
    height:100%;
    > h4 {
      margin: 10px ;
      padding-left: 30px;
    }
    > ol {
      > li {
        height: 40px;
        box-sizing: border-box;
        > a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          padding-left: 50px;
          font-size: 14px;
        }
        > .router-link-active {
          border-right: 3px solid #409eff;
          width: 260px;
          background-color: #e6f7ff;
        }
      }
    }
    >.component{
      >li{
        height:50px
      }
    }
  }
}
@media (max-width: 500px) {
  .left-translate {
    transform: translateX(-260px);
  }
}
main {
  overflow: auto;
}
</style>