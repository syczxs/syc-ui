<template>
  <div>
    <div class="banner">
      <div style="background-color:#ebf6fb;height:60px;position:fixed;width:100%">
      <Topnav />
      </div>
      <div class="banner-bottom">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-hu1"></use>
        </svg>
        <h1>SYC UI</h1>
        <h2>一个有趣的 UI 框架库</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc/switch">开始</router-link>
        </p>
      </div>
    </div>
    <div class="main">
      <aside>
        <ul>
          <li>
            <router-link to="/" style="color: #409eff">设计原则</router-link>
          </li>
          <li><router-link to="/doc/switch">查看组件</router-link></li>
          <li><a to="/doc">github</a></li>
        </ul>
      </aside>
      <main>
        <h2 style="margin-left:40px">设计原则</h2>
        <div class="all-box">
          <div class="title-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vue"></use>
            </svg>
            <div class="span-box">
              <h4>Vue</h4>
              <span class=""> 使用vue3编写 </span>
            </div>
          </div>
          <div class="title-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-typescript"></use>
            </svg>
            <div class="span-box">
              <h4>typescript</h4>
              <span class=""> 使用typescript编写 </span>
            </div>
          </div>
          <div class="title-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiaolv"></use>
            </svg>
            <div class="span-box">
              <h4>高效</h4>
              <span class=""> Efficiency </span>
            </div>
          </div>
        </div>

        <!-- <div class="text-box">
          <h2>基于Vue3</h2>
          <span>使用了Vue 3 Composition API</span>
        </div>

        <div class="text-box">
          <h2>基于Typescript</h2>
          <span>代码采用typescript书写</span>
        </div>

        <div class="text-box">
          <h2>高效</h2>
          <span>组件简洁易读</span>
        </div> -->
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" >
.banner {
  width: 100%;
  height: 460px;
  background-color: #ebf6fb;
  > .banner-bottom {
    height: 460px;
    
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > svg {
      width: 100px;
      height: 100px;
    }
    h1,
    h2 {
      color: #28a2fd;
      margin: 10px 0
    };
    >.actions {
    padding: 8px 0;

    a {
      width: 100px;
      margin: 0 8px;
      border:  2px solid  #28a2fd;
      color: #28a2fd;
      display: inline-block;
      padding: 8px 24px;
      border-radius: 4px;
      text-align: center;

      a:hover {
        text-decoration: none;
      }
    }
  }
  }
}

span {
  text-decoration: none;
}
.main {
  display: flex;
  width: 1120px;
  margin: 80px auto;
  > aside {
    width: 320px;
    padding:50px 100px;
    height: 100px;
    > ul {
      width: 100%;
      > li {
        width: 100%;
        height: 60px;
        font-weight: 700;
        a {
          margin: 0 8px;
          background: #fff;
          display: inline-block;
          $h: 28px;
          height: $h;
          line-height: $h;
          text-decoration: none;
        }
      }
    }
  }
  > main {
    flex: 1;
   
    > .all-box {
      margin-top: 30px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      > .title-box {
        width: 200px;
        height: 200px;
        background-color: #fbfcfd;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .icon {
          width: 70px;
          height: 70px;
        }
        > .span-box {
          height: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          > span {
            color: #99a9bf;
          }
        }
      }
    }

    > .text-box {
      margin-top: 50px;
      width: 100%;
      > span {
        font-size: 16px;
        margin-top: 10px;
        display: block;
      }
      > span:before {
        content: "";
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        vertical-align: middle;
        background-color: #5e6d82;
        margin-right: 5px;
      }
    }
  }
}

@media (max-width: 800px) {
  .main {
    width: 100%;
    > aside {
      display: none;
    }
  }
}
</style>