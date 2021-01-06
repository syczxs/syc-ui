<demo>
支持修改按键背景色
</demo>
<template>
     <Switch v-model:value="bool" :color="color" />
</template>

<script lang="ts">
import {Switch} from "../lib/index";
import {ref} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(true);
    const color=ref("red")
    return{bool,color}
  },
};
</script>