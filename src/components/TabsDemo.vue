<template>
  <div class="">
    <h1>Tabs 组件示例</h1>
    <p>Tabs基础使用</p>

    <h2>如何使用</h2>
    <p class="title">传入一个值控制选中项</p>
    <Demo :component="Tabs1Demo"></Demo>


    <Attributes :columns="columns" :data="data"></Attributes>
  </div>

</template>

<script lang="ts">
import Button from "../lib/Button.vue"
import Demo from "../components/Demo.vue";
import Attributes from "../lib/Attributes.vue"
import Tabs1Demo from "../code-demo/Tabs1.Demo.vue"
import { ref } from "vue";

export default {
  components: {
    Button,
    Demo,
    Attributes,
  },
  setup() {
    const data = [
      {
        params: "selected",
        desc: "初始选中项",
        type: "string",
        select: "/",
        default: "/",
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
    return{Tabs1Demo,data,columns}
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
