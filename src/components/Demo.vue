<template>
  <div class="demo">
    <div class="demo-component">
      <component :is="component" />
    </div>
    
    <div class="demo-code" ref="codebox" >
      <pre class="language-html" v-html="html" />
    </div>

    <div @click="toggleCode" class="demo-actions">
      <svg class="icon" aria-hidden="true">
          <use :xlink:href="codeVisible===false?'#icon-jiantou':'#icon-jiantou-up'"></use>
        </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "./prism.css";
import { computed, ref ,onMounted,watchEffect} from "vue";
const Prism = (window as any).Prism;
export default {
  components: {
    Button,
  },
  props: {
    component: Object,
  },
  setup(props) {
    const codebox = ref < HTMLDivElement > (null)
    const boxHeight=ref(0)

    onMounted(() => {
    
        const {
          height
        } = codebox.value.getBoundingClientRect()
        boxHeight.value=height
        codebox.value.style.height=0+"px"
        codebox.value.style.paddingTop=0+"px" 
        codebox.value.style.paddingBottom=0+"px" 

      
    })


    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );    
    });
    const toggleCode=()=>{
      if(codeVisible.value==false){
        codebox.value.style.height=boxHeight.value+"px"
        codebox.value.style.paddingTop=8+"px" 
        codebox.value.style.paddingBottom=8+"px" 
        codebox.value.style.transition="all 250ms";
        
      }else{     
        codebox.value.style.height=0+"px"
        codebox.value.style.paddingTop=0+"px" 
        codebox.value.style.paddingBottom=0+"px" 
        codebox.value.style.transition="all 250ms";
      }
      codeVisible.value=!codeVisible.value
    }
    const codeVisible=ref(false)
    
    return {
      Prism,
      html,
      codeVisible,
      toggleCode,
      codebox
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  width: 60%;
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  @media (max-width: 500px){
    width: 80%;
  }

  &-component {
    padding: 16px;
    border-bottom:1px solid $border-color ;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    
    
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px solid  $border-color;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1px;
  }
  &-code {
    padding: 8px 16px;
    // transition: all 250ms;
    overflow: hidden;
    background-color: #fafafa;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
  
}
</style>