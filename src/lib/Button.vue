<template>
  <button class="syc-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="syc-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    round: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level, round } = props;
    const classes = computed(() => {
      return {
        [`syc-theme-${theme}`]: theme,
        [`syc-size-${size}`]: size,
        [`syc-level-${level}`]: level,
        ["syc-round"]: round,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss" >
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: red;
$green: #85ce61;
$yellow: #ebb563;
$grey: grey;
$radius: 4px;
.syc-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & {
    margin: 0 15px 15px 0;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.syc-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.syc-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.syc-round {
    border-radius: 20px;
    padding: 12px 23px;
  }

  &.syc-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.syc-size-small {
    font-size: 6px;
    height: 25px;
    padding: 0px 6px;
  }
  &.syc-theme-button {
    &.syc-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.syc-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
    &.syc-level-success {
      background: $green;
      color: white;
      border-color: $green;
      &:hover,
      &:focus {
        background: darken($green, 10%);
        border-color: darken($green, 10%);
      }
    }
    &.syc-level-inform {
      background: $grey;
      border-color: $grey;
      color: white;
      &:hover,
      &:focus {
        background: darken($grey, 10%);
        border-color: darken($grey, 10%);
      }
    }
    &.syc-level-warm {
      background: $yellow;
      border-color: $yellow;
      color: white;
      &:hover,
      &:focus {
        background: darken($yellow, 10%);
        border-color: darken($yellow, 10%);
      }
    }
  }
  &.syc-theme-link {
    &.syc-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.syc-theme-text {
    &.syc-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.syc-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
    &.syc-level-success {
      color: $green;
      &:hover,
      &:focus {
        color: darken($green, 10%);
      }
    }
    &.syc-level-inform {
      color: $red;
      &:hover,
      &:focus {
        color: darken($grey, 10%);
      }
      &.syc-level-warm {
        color: $yellow;
        &:hover,
        &:focus {
          color: darken($yellow, 10%);
        }
      }
    }
  }
  &.syc-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.syc-theme-link,
  &.syc-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .syc-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: syc-spin 1s infinite linear;
  }
}
@keyframes syc-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

