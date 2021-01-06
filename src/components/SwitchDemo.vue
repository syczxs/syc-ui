<template>
  <div class="">
    <h1>Switch 组件示例.</h1>
    <p>按钮用于开始一个即时操作</p>

    <h2>如何使用</h2>
    <p class="title">传入一个布尔值控制开关</p>
    <Demo :component="Switch1Demo"></Demo>

    <h2>支持disabled</h2>
    <Demo :component="Switch2Demo"></Demo>
    <h2>控制传入颜色</h2>
    <p class="title">直接传入颜色</p>
    <Demo :component="Switch3Demo"></Demo>

    <Attributes :columns="columns" :data="data"></Attributes>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Switch1Demo from "../code-demo/Switch1.demo.vue";
import Switch2Demo from "../code-demo/Switch2.demo.vue";
import Switch3Demo from "../code-demo/Switch3.demo.vue";
import Demo from "./Demo.vue";
import Attributes from "../lib/Attributes.vue";

import { ref } from "vue";
export default {
  components: {
    Button,
    Demo,
    Attributes,
  },
  setup() {
    const bool = ref(true);

    const data = [
      {
        params: "value",
        desc: "状态",
        type: "boolean",
        select: "true / false",
        default: "false",
      },
      {
        params: 'color',
        desc: '按钮颜色',
        type: 'string',
        select: 'red / #409eff ',
        default: '#409eff',
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
    return { bool, Switch1Demo, Switch2Demo, Switch3Demo, data, columns };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
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
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>