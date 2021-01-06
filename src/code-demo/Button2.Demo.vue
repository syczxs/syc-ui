<demo>
不同尺寸和不同形状
</demo>
<template>
  <div>
    <div>
      <Button size="big">大型按钮</Button>
      <Button>默认按钮</Button>
      <Button size="small">小型按钮</Button>
    </div>

     <div style="margin-top:10px">
      <Button size="big" round>大型按钮</Button>
      <Button round>普通</Button>
      <Button size="small" round>小型按钮</Button>
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