<demo>
常规用法
</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="杭州">内容1</Tab>
    <Tab title="上海">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tabs,Tab} from "../lib/index";

import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const selected = ref("上海");
    return {
      selected,
    };
  },
};
</script>