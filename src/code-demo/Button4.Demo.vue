<demo>
禁用和加载中

</demo>
<template>
  <div>
    <Button >普通按钮</Button>
    <Button disabled>禁用按钮</Button>
  </div>
 
    <Button loading>加载中</Button>
 
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