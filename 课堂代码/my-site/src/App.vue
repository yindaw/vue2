<template>
  <div>
    <h1>App组件</h1>
    <Avatar
      url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg"
      :size="100"
    />
    <Avatar
      url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"
      :size="50"
    />
  </div>
</template>
<script>
import Avatar from "./components/Avatar.vue";
export default {
  components: {
    name: "App",
    Avatar,
  },
};
</script>