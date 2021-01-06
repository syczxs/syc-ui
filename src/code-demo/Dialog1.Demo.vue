<demo>
常规用法
</demo>
<template>
  <Button @click="toggle">点击显示</Button>
  <Dialog
    v-model:visible="dialogVisible"
    :closeOnClickOverlay="false"
    :confirm="f1"
    :cancel="f2"
  >
    <template v-slot:content>
      <span>内容</span>
    </template>
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {Button,Dialog} from "../lib/index";

import { ref } from "vue";
export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const dialogVisible = ref(false);
    const toggle = () => {
      dialogVisible.value = !dialogVisible.value;
    };
    const f1 = () => {
     return false
    };
    const f2 = () => {
    
    };
    return{dialogVisible,toggle,f1,f2}
  },
};
</script>