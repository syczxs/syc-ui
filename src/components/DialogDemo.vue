<template>
 <div class="">
    <h1>Dialog 组件示例</h1>
    <p></p>

    <h2>基本使用</h2>
    <p class="title">传入一个boolean控制弹窗开关，控制传入函数的回调可以控制 确认/取消按钮后是否关闭弹窗</p>
    <Demo :component="Dialog1Demo"></Demo>

    <h2>另一种方式</h2>
    <p class="title">使用函数调用的方式打开窗口</p>
    <Demo :component="Dialog2Demo"></Demo>
    <Attributes :columns="columns" :data="data"></Attributes>

  </div>
  
</template>
<script lang="ts">

import Button from "../lib/Button.vue";
import Demo from "./Demo.vue";
import Attributes from "../lib/Attributes.vue";
import Dialog1Demo from "../code-demo/Dialog1.Demo.vue"
import Dialog2Demo from "../code-demo/Dialog2.Demo.vue"


import { ref } from "vue";

export default {
  components: {
    Button,
    Demo,
    Attributes
  },
  setup() {
     const data = [
      {
        params: "dialogVisible",
        desc: "弹窗开关",
        type: "boolean",
        select: "true/false",
        default: "false",
      },
      {
        params: "closeOnClickOverlay",
        desc: "点击遮挡层关闭弹窗",
        type: "boolean",
        select: "true/false",
        default: "false",
      },
      
    ];
    const columns = [
      {
        title: "参数",
        dataIndex: "params",
        key: "age",
      },
      {
        title: "说明",
        dataIndex: "desc",
        key: "age",
      },
      {
        title: "类型",
        dataIndex: "type",
        key: "age",
      },
      {
        title: "可选值",
        dataIndex: "select",
        key: "age",
      },
      {
        title: "默认值",
        dataIndex: "default",
        key: "age",
      },
    ];
    return {
      Dialog1Demo,Dialog2Demo,data
      
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 14px;
  margin: 20px 0 20px 0;
}
.title::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  vertical-align: middle;
  background-color: #5e6d82;
  margin-right: 5px;
}
</style>