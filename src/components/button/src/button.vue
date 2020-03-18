<template>
  <button class="cc-button" :disabled="disabled" :class="['cc-button-' + size, {'disabled':disabled}]" @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "cc-button",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
  }
};
</script>
<style lang="scss" scoped>
.cc-button {
  cursor: pointer;
  border: none;
  color: #fff;
  display: inline-block;
  text-align: center;
  background-color: #c46130;
  position: relative;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: lighten(#c46130, 5%);
  }
  &:active {
    background-color: darken(#c46130, 2%);
  }
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-width: 4px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }
}

.disabled {
    background-color: #E8E5E9;
}

.cc-button-mini {
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  width: 116px;
}

.cc-button-small {
  height: 25px;
  line-height: 25px;
  font-size: 11px;
  width: 145px;
}

.cc-button-medium {
  height: 29px;
  line-height: 29px;
  font-size: 13px;
  width: 163px;
}

.cc-button-large {
  height: 32px;
  line-height: 32px;
  font-size: 15px;
  width: 181px;
}

.cc-button-xlarge {
  height: 38px;
  line-height: 38px;
  font-size: 18px;
  width: 217px;
}
</style>
