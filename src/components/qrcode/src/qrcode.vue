<template>
  <div
    class="cc-qrcode"
    :style="{ padding: padding + 'px', backgroundColor: backgroundColor }"
  >
    <div ref="qrCode"></div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  name: "cc-qrcode",
  props: {
    //二维码地址
    url: {
      type: String,
      required: true
    },
    //二维码颜色
    color: {
      type: String,
      default: "#333"
    },
    //二维码背景颜色
    backgroundColor: {
      type: String,
      default: "#fff"
    },
    //二维码宽度
    width: {
      type: Number,
      default: 130
    },
    //二维码高度
    height: {
      type: Number,
      default: 130
    },
    //二维码的内边距
    padding: {
      type: Number,
      default: 8
    }
  },
  methods: {
    _create() {
      new QRCode(this.$refs.qrCode, {
        text: this.url,
        width: this.width,
        height: this.height,
        colorDark: this.color,
        colorLight: this.backgroundColor,
        correctLevel: QRCode.CorrectLevel.L
      });
    }
  },
  mounted() {
    this._create();
  }
};
</script>
<style lang="scss" scoped>
.cc-qrcode {
  display: inline-block;
  vertical-align: bottom;
}
</style>
