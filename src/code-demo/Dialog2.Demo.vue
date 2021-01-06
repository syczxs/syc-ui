<demo>
常规用法
</demo>
<template>
 <Button @click="showModalFunc">点击显示</Button>
  
</template>

<script lang="ts">
import {Button,openDialog } from "../lib/index";

import { ref } from "vue";
export default {
  components: {
    Button,
    
  },
  setup() {
   const showModalFunc = () => {
      const visible = true
      let vm = openDialog({
        visible,
        title: '标题',
        content: '对话框内容',
        confirm: () => {
          console.log('ok');
          return false
        },
        cancel: () => {
          console.log('取消');
        }
      })
   }
    return{showModalFunc}

    
  },
 
};
</script>