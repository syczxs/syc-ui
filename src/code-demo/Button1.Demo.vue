<demo>
常规用法
</demo>
<template>
  <Button theme="button" @click="onClick">普通按钮</Button>
  <Button theme="link">link按钮</Button>
  <Button theme="text">文字按钮</Button>
</template>

<script lang="ts">
import {Button} from "../lib/index";
import { ref } from "vue";
export default {
  components: {
    Button,
  },
setup() {
    const onClick = () => {
      const onClick = () => {};
    };
    return { onClick };
  },
};
</script>