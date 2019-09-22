<template>
  <div class="container">
    <div>{{msg}}</div>
    <div>{{name}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  components: {},
  data: () => ({
    msg: "消息"
  }),
  computed: {
    ...mapGetters("app", {
      name: "appName"
    })
  }
};
</script>

<style>
</style>
