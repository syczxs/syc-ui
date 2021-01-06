<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="syc-dialog-overlay" @click="onClickOverlay"></div>
      <div class="syc-dialog-wrapper">
        <div class="syc-dialog">
          <header>
            <slot name="title" />
            <span class="syc-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button level="main" @click="confirm">确认</Button>
            <Button @click="cancel">取消</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>
<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    title: {
      type: String,
      default: "提示",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    confirm: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const cancel = () => {
      context.emit('cancel');
      close();
    };
    const confirm = () => {
      if (props.confirm && props.confirm() !== false) {
        close();
      }
    };
    return { close, onClickOverlay, cancel, confirm };
  },
};
</script>
<style lang="scss">
$border-color: #d9d9d9;
.syc-dialog {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    width: 60%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>