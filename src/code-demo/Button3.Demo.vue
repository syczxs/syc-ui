<demo>
不同颜色
</demo>
<template>
  <div>
    <div>
      <Button>普通按钮</Button>
      <Button level="main">主要按钮</Button>
      <Button level="success">成功按钮</Button>
      <Button level="inform">信息按钮</Button>
      <Button level="warm">警告按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
  </div>
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