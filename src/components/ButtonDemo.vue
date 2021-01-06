<template>
  <h1>Buttom按键</h1>
  <p>Button基本使用</p>

  <h2>如何使用</h2>
  <p class="title">按钮种类</p>
  <Demo :component="Button1Demo"></Demo>

  <h2>不同类型</h2>
  <p class="title">不同类型按钮决定了按钮不同显示效果</p>
  <Demo :component="Button3Demo"></Demo>
  <h2>不同尺寸</h2>
  <p class="title">修改按钮size改变按钮大小</p>
  <Demo :component="Button2Demo"></Demo>

  <h2>不同状态</h2>
  <p class="title">按钮支持disabled和loading两种状态</p>
  <Demo :component="Button4Demo"></Demo>
  <Attributes :columns="columns" :data="data"></Attributes>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Demo from "./Demo.vue";
import Button1Demo from "../code-demo/Button1.Demo.vue";
import Button2Demo from "../code-demo/Button2.Demo.vue";
import Button3Demo from "../code-demo/Button3.Demo.vue";
import Button4Demo from "../code-demo/Button4.Demo.vue";
import Attributes from "../lib/Attributes.vue";
export default {
  components: {
    Button: Button,
    Demo,
    Attributes,
  },
  setup() {
    const onClick = () => {
      
    };
    const data = [
      {
        params: "theme",
        desc: "按键种类",
        type: "string",
        select: "button/ flink /text",
        default: "button",
      },
      {
        params: 'level',
        desc: '按钮类型',
        type: 'string',
        select: 'main / success / inform  /danger / warm',
        default: '#409eff',
      },
      {
        params: 'size',
        desc: '按钮大小',
        type: 'string',
        select: 'normal / big / small',
        default: 'normal',
      },
      {
        params: '/',
        desc: '状态',
        type: '/',
        select: 'loading / disabled',
        default: '/',
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
    return { onClick, Button1Demo, Button2Demo, Button3Demo, Button4Demo,data, columns };
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